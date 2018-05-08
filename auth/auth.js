const jwt = require('jwt-simple');
const moment = require('moment');

exports.createToken = function (id) {
    var payload = {
        sub: id,
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, "clave");
};