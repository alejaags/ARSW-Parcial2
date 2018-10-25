# EXPLICACIÓN ARQUITECTURA
  Al mejorar la arquitectura se hizo uso de los patrones GRASP ya que al modelar la aplicación de esta manera nos es posible tener una alta cohesión y un bajo acoplamiento, la interfaz "HttpConnection" permite extender la aplicación por medio de fábricas, de tal manera que todas las clases que se quieran usar implementen esta.
  El uso de paquetes ordenados nos permite entender de una forma más fácil la aplicación y así mismo nos reduce el acoplamiento de la misma.
  
  La implementación de un cache en la aplicación nos permite realizar busquedas de manera más ágil, de tal forma que si un usuario ya realizó la busqueda de una ciudad, esta sea más fácil de encontrar por medio del cache.

Al implementar el cliente web de manera asíncrona evitamos el desperdicio de memoria del computador al actualizar constantemente la aplicación.

URL HEROKU: https://guarded-sea-87491.herokuapp.com/






# java-getting-started

[![CircleCI](https://circleci.com/gh/heroku/java-getting-started.svg?style=svg)](https://circleci.com/gh/heroku/java-getting-started)

A barebones Java app, which can easily be deployed to Heroku.

This application supports the [Getting Started with Java on Heroku](https://devcenter.heroku.com/articles/getting-started-with-java) article - check it out.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running Locally

Make sure you have Java and Maven installed.  Also, install the [Heroku CLI](https://cli.heroku.com/).

```sh
$ git clone https://github.com/heroku/java-getting-started.git
$ cd java-getting-started
$ mvn install
$ heroku local:start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

If you're going to use a database, ensure you have a local `.env` file that reads something like this:

```
DATABASE_URL=postgres://localhost:5432/java_database_name
```

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Java on Heroku, see these Dev Center articles:

- [Java on Heroku](https://devcenter.heroku.com/categories/java)
