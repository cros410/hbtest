'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');


function ensureAuthenticated(token) {
    var payload = jwt.decode(token, "clave");
    if (payload.exp <= moment().unix()) {
        return false;
    } else {
        return true;
    }

}

module.exports = {
    ensureAuthenticated
}