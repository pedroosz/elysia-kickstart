# Elysia kickstart with drizzle-orm and postgresql

## Getting Started

###### Installing the dependencies

To install the needed dependencies simply run:

```
bun install
```

###### Starting the database instance

To start the database instance run:

```
docker compose up

# or

docker-compose up
```

this will start our postgresql database, so wait for it to be ready and then run the migrations.

###### Running the migrations

We need to run the migrations to create the database tables. Run the following command to run the migrations:

```
bun run migrate
```

###### Running the server

After all the steps we should be ready to run the project, to start the server run:

```
bun run dev
```

and you should see this message in the console:
`🦊 Elysia is running at localhost:3000`

###### API Docs (Swagger)

To access the API docs, go to:

```
http://localhost:3000/swagger
```
