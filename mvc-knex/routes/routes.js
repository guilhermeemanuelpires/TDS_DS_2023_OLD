const express = require("express");
const empresaRoute = require("./empresa.route");

const routes = new express.Router();

routes.get("/empresa", empresaRoute);

module.exports = routes;
