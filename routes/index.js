'use strict';
const path = require("path")
const contr = require("../controllers/index");
const express = require('express');
const api = express.Router();

api.route("/")
    .get((req, res) => {
        res.sendFile("index.html", { root: path.join(__dirname, "../public/") })
    });

api.route("/private")
    .get((req, res) => {
        res.sendFile("private.html", { root: path.join(__dirname, "../public/") })
    });

api.route("/registro")
    .get((req, res) => {
        res.sendFile("registro.html", { root: path.join(__dirname, "../public/") })
    });
    
api.route("/login")
    .post(contr.save);

api.route("/getlogin")
    .post(contr.login);

api.route("/auth")
    .get(contr.authentication);

module.exports = api;