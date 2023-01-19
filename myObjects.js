"use strict";
exports.__esModule = true;
var user = {
    name: "sameer",
    email: "ssameerkhan525@gmail.com",
    id: 1,
    active: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// createUser({name:"sameer",isActive:false,email:"ssameerkhan525@gmail.com"}) this is the weird behaviour but we could not add another parameter to this function for this to happen we have to create another object and pass it to variable
var newUser = {
    name: "sameer asad",
    email: "ssameerkhan525@gmail.com",
    isActive: true
};
createUser(newUser);
function createCourse() {
    return {
        name: "urdu",
        id: 1
    };
}
function createNewUser(anotherUser) {
    return {
        name: "sameer",
        email: "ssameerkhan525@gmail.com",
        id: 0,
        isActive: true
    };
}
var myLocation = {
    country1: "Pakistan",
    city: "Karachi"
};
