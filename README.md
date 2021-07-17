<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJs crash course

This NestJs introduction based on a Youtube video, you can see it [here](https://www.youtube.com/watch?v=2n3xS89TJMI) this guy have some awesome tutorials, so, check that out!

## Description

This was built using NestJs + TypeORM which are two amazing things together.

Here we have an Rest API with a simple learning purpose too see how TypeORM and NestJs work together (and it's beautiful). I've added Swagger to see how this lib works too, and a good future implementation is creating unit tests.

In this API we can create users and these users can have plants, just that. in http://localhost:3000/ we have the Swagger, there you can see all endpoints.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Setup Env variables

You have to have a Postgres instance running on port 5432, and a database with the name <strong>nest_crash_course</strong>.

## Running the app

After that you can run the app with

```bash
# watch mode
$ npm run start:dev
```

And go to [http://localhost:3000/](http://localhost:3000/) and see Swagger working.
