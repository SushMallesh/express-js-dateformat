const express = require("express");

const app = express();

const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const date = addDays(new Date(), 100);
  const dateFormat = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  response.send(dateFormat);
});

module.exports = app;
