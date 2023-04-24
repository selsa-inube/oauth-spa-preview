package config

import (
	"github.com/joho/godotenv"
)

func GetEnvs() (port, cors string) {
	envFile, _ := godotenv.Read(".env")
	port = envFile["PORT"]
	cors = envFile["CORS"]
	return
}
