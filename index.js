const person = require("./information")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text :`I am ${person.name} and i study at ${person.campusName}`,
    e : "oO",
    T : "U "
}));