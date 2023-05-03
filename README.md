# OAuth SPA Preview

It is an application that is responsible for making an example of the use of OAuth2.0 with Auth0 using React for the web client and Golang with Fiber for the REST service.

## Installation
Clone the project with git clone -b main https://github.com/selsa-inube/oauth-spa-preview.git

### Client
We must have previously installed [node.js](https://nodejs.org/en)

Use the package manager [npm](https://www.npmjs.com/) to install being inside the client directory.

```bash
cd client
```

```bash
npm install
```

### Server
We must have previously installed [Golang](https://go.dev/doc/install) v1.20

We must install the project dependencies with the Golang command being inside the server directory.

```bash
cd server
```

```bash
go mod tidy
```

## Execution
### Client
Execute the React initialization command.

```bash
cd client
```

```bash
npm start
```
### Server
Execute the Golang Fiber initialization command.

```bash
cd server
```

```bash
go run main.go
```

## Usage

We must enter the web in the browser with the url: localhost:3000

By clicking on the "Login" button we can start a session with the redirection view provided by Auth0, from there when authenticating we will have the authorization and the access token for the routes that are protected (taking this into account new routes will appear in the navigation bar).

The traceability of the consumption of the end-points (protected / unprotected) of the REST server can be seen in the terminal that is running.

In this way, with Auth0, authentication and authorization are being implemented with integrated security measures such as PKCE, the access token and refresh token.

## C4
### Context
![context](https://media.discordapp.net/attachments/1088817182449864775/1103002019314282537/C4-Context.jpg?width=264&height=554)

### Containers
![containers](https://media.discordapp.net/attachments/1088817182449864775/1103002150860234803/C4-Container.jpg?width=852&height=554)

### Components
![components](https://media.discordapp.net/attachments/1088817182449864775/1103002309790810204/C4-Components.jpg?width=219&height=554)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)