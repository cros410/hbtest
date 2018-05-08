'use strict';
const bcrypt = require('bcrypt-nodejs');
const mongojs = require('mongojs');
const auth = require("../auth/auth");
const isauth = require("../middleware/auth")
const db = mongojs("mongodb://hbtest:hbtest@ds157631.mlab.com:57631/hbtest", ["user"]);

function login(req, res) {
    db.user.findOne({
        user: req.body.user
    }, (err, user) => {
        if (!user) {
            res.status(300).send({ cod: 0, msg: "login incorrecto" })
            return
        }
        bcrypt.compare(req.body.password, user.password, function (err, ress) {
            if (err || !ress) {
                res.status(300).send({ cod: 0, msg: "login incorrecto" })
                return
            }
            res.send({
                cod: 1, jwt: auth.createToken({
                    id: req.body.user,
                    type: 1
                })
            });
        });

    });
}

function save(req, res) {
    db.user.insert({
        user: req.body.user,
        password: bcrypt.hashSync(req.body.password)
    }, (err, user) => {
        if (err) {
            res.send(err)
            return
        }
        res.send({ cod: 1, msg: "correcto" })
    })
}

function authentication(req, res) {
    console.log(req.query.jwt)
    if (!isauth.ensureAuthenticated(req.query.jwt)) {
        res.status(300).send({ cod: 0, msg: "no auth" })
        return
    }
    res.send({ cod: 1, msg: "auth ok" })

}

module.exports = {
    login,
    save,
    authentication
}