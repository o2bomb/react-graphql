# React w/ GraphQL Server template
This project contains boilerplate code for a TypeScript React app with a GraphQL API running on Express. The entire project is Dockerized for easy setup of a development environment.

## Running the project
Installation prerequisites:
- [Docker](https://hub.docker.com/)
- Yarn or npm

1. Create a `.env` file containing all the required environment variables needed to run both the client and the server
2. `docker-compose build`
3. `docker-compose up`

### Running only the server
1. Create a `.env` file containing all the required environment variables needed to run both the client and the server
2. `docker-compose build`
3. `docker-compose run --rm -p 5000:5000 server`
- The GraphQL playground can be accessed at http://localhost:5000/graphql