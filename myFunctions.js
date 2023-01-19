"use strict";
exports.__esModule = true;
// function argument with typecasting
var login = function (email, password, ispaid) {
    return 0;
};
login("s@s.com", "12334", false);
// function argument with default values
var signUp = function (name, email, password) {
    if (password === void 0) { password = 123; }
    return name;
};
signUp("sameer", "s@s.com");
// handle return type of a function
var addTwo = function (val) {
    return val + 1;
};
addTwo(5);
var heros = ["kamal", "kamal", "jamal"];
heros.map(function (getHeros) {
    return "this will be our ".concat(getHeros);
});
// define function explicitly  even the return type is void so every person is working on that project will have idea that it has that return type.
var consoleError = function (errrorMessage) {
    console.log(errrorMessage);
};
//  the never type is a value that never rturn a value or intentional termination of the code.
var handleError = function (err) {
    throw new Error(err);
};
