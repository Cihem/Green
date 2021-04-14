# Green

GREEN - OPTIMISE YOUR BEHAVIOUR TO MINIMISE CO2 EMISSIONS

## Introduction

The app is designed for users who wants to optimise their behaviour to minimise their CO2 Emissions by checking the Carbon Intensity Forecast.
Feature will include a carbon foot print calculator and some tips to reduce CO2 emissions.

### Available Scripts

In the project directory, you can run:

### Dependencies

Run yarn on root folder to install dependencies related to Express.

cd client and run yarn install dependencies related to React.

### Run Your Development Servers

Run yarn start in project directory to start the Express server on port 5000.

cd client and run yarn start to start the client server.

Open [http://localhost:3000](http://localhost:3000)to view the client in the browser.

Open [http://localhost:3000](http://localhost:5000) to view the data in the browser.

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called tips: `create database green`
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=green
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create a table in your database.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.