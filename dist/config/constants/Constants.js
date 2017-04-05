"use strict";
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.DB_CONNECTION_STRING = "mongodb://localhost/warriors";
Object.seal(Constants);
module.exports = Constants;
