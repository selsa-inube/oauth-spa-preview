package main

import (
	"log"
	"oauth-spa-preview/config"
	"oauth-spa-preview/data"

	"github.com/gofiber/adaptor/v2"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func Unauthorized(c *fiber.Ctx) error {
	if err := c.Next(); err != nil {
		if e, ok := err.(*fiber.Error); ok {
			if e.Code == fiber.StatusUnauthorized {
				log.Println("Request without valid token")
				return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"msg": "Invalid token"})
			}
		}
		return err
	}
	return nil
}

func main() {
	app := fiber.New()

	port, corsOrigins, _, _ := config.GetEnvs()
	app.Use(cors.New(cors.Config{
		AllowOrigins: corsOrigins,
		AllowMethods: "GET,POST,PUT,DELETE",
	}))
	app.Use(logger.New())
	app.Use(recover.New())

	var EnsureValidToken = adaptor.HTTPMiddleware(config.EnsureValidToken)
	app.Get("/employees", EnsureValidToken, func(c *fiber.Ctx) error {
		return c.JSON(data.Employees)
	})

	app.Get("/sites", func(c *fiber.Ctx) error {
		return c.JSON(data.Sites)
	})

	app.Use(Unauthorized)

	log.Println("API listening on", port)
	log.Fatal(app.Listen(port))
}
