# React w/ GraphQL Server template
This project contains boilerplate code for a TypeScript React app with a GraphQL API running on Express. The entire project is Dockerized for easy setup of a development environment.

## Running the project
Installation prerequisites:
- [Docker](https://hub.docker.com/)
- Yarn or npm

1. Create a `.env` file containing all the required environment variables needed to run both the client and the server
2. `docker-compose build`
3. `docker-compose up`
- Gain terminal access into a specific service by using `docker-compose exec service_name bash`, where `service_name` can be replaced with either `server`, `client`, `postgres` or `redis`

### Running only the server
1. Create a `.env` file containing all the required environment variables needed to run both the client and the server
2. `docker-compose build`
3. `docker-compose run --rm -p 5000:5000 server yarn dev:watch`
- The GraphQL playground can be accessed at http://localhost:5000/graphql

### Example .env file for development environment
```env
DATABASE_NAME=react-graphql
POSTGRES_PASSWORD=verysecretpassword
DATABASE_URL=postgresql://postgres:verysecretpassword@postgres:5432/react-graphql
REDIS_URL=redis:6379
COOKIE_DOMAIN=.felixtan.me
CORS_ORIGIN=http://localhost:3000
PORT=5000
SESSION_SECRET=laksdjfpq08w439owijhdklmbsdfklqjwyhef98
NEXT_PUBLIC_GRAPHQL_SERVER_URL=http://localhost:5000/graphql
```
|Environment variable|Description|
|-|-|
|`DATABASE_NAME`|Name of database to be created in Postgres|
|`POSTGRES_PASSWORD`|Password used for accessing Postgres database|
|`DATABASE_URL`|Postgres connection URL|
|`REDIS_URL`|Redis connection URL|
|`COOKIE_DOMAIN`|The base domain that cookies will work on. Must be set if using subdomains in production|
|`CORS_ORIGIN`|CORS origin (client URL)|
|`PORT`|Port that the Express server uses/exposes|
|`SESSION_SECRET`|Used for encrypting session data. Put a long, hard to crack string here|
|`NEXT_PUBLIC_GRAPHQL_SERVER_URL`|Endpoint that the client uses to access the GraphQL server|