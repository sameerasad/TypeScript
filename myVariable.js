"use strict";
exports.__esModule = true;
// string  in ts
var greeting = "Hello World";
// it will suggest only functions or method that are available on declared type
greeting.toLocaleLowerCase();
console.log(greeting);
// number in ts
var userId = 282828;
console.log(userId);
// boolean in ts
// ts is smart enough when you assign something to a variable it will automatically cast the value as their type i.e in below line of code did not cast the type but assign a boolean, so it will assign as boolean
var isUserSignedIn = true;
// any is basically shutdown of type checking
var hero;
var getHero = function () {
    return "hammad";
};
hero = getHero();

