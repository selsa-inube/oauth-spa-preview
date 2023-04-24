package config

import (
	"encoding/json"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"gopkg.in/square/go-jose.v2"
)

var authConfig = struct {
	Issuer     string
	Audience   string
	Algorithms []string
}{
	Issuer:     "http://localhost:3000/",
	Audience:   "https://dev-hhln36iqhjgzkd4d.us.auth0.com/api/v2/",
	Algorithms: []string{"RS256"},
}

func getPublicKey(token *jwt.Token) (interface{}, error) {
	var keySet jose.JSONWebKeySet
	resp, err := http.Get(authConfig.Issuer + ".well-known/jwks.json")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&keySet)
	if err != nil {
		return nil, err
	}

	for _, key := range keySet.Keys {
		if key.KeyID == token.Header["kid"] {
			return key.Public(), nil
		}
	}

	return nil, jwt.ErrInvalidKey
}

func Authenticated(c *fiber.Ctx) error {
	token, err := jwt.Parse(c.Get("Authorization"), func(token *jwt.Token) (interface{}, error) {
		return getPublicKey(token)
	})
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString(err.Error())
	}

	if !token.Valid || token.Method.Alg() != authConfig.Algorithms[0] {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized")
	}

	return c.Next()
}
