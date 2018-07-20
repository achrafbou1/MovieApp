# Application overview

An application that allow users to view information about movies.

## Installation

# Getting Started

To get the Node server running locally:
- Install Node from https://nodejs.org/en/download/
- Clone this repo
- Run `npm install` to install all required dependencies
- Run `node app.js` to start the server

# Code Overview

## Dependencies

- [express](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [body-parser](https://github.com/expressjs/body-parser) - For parsing incoming body requests
- [ejs](https://github.com/tj/ejs) - For rendering views

## Application Structure

- `app.js` - The main application.
- `views/` - This folder contains ejs views that are used for dynamic rendering of movies through the IMDB API.
- `public/` - This folder contains the css files.

