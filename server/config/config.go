package config

import (
	"github.com/joho/godotenv"
)

func GetEnvs() (port, cors, auth0Domain, auth0Audience string) {
	envFile, _ := godotenv.Read(".env")
	port = envFile["PORT"]
	cors = envFile["CORS"]
	auth0Domain = envFile["AUTH0_DOMAIN"]
	auth0Audience = envFile["AUTH0_AUDIENCE"]
	return
}
