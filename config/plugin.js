'use strict';

// had enabled by egg
// exports.static = true;
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};

// Egg's JWT(JSON Web Token Authentication Plugin)
exports.jwt = {
    enable: true,
    package: "egg-jwt"
};

exports.validate = {
    enable: true,
    package: "egg-validate"
};

exports.cors = {
    enable: true,
    package: "egg-cors"
};

exports.io = {
    enable: true,
    package: "egg-socket.io"
};

// exports.swaggerdoc = {
//     enable: true,
//     package: 'egg-swagger-builder',
// };