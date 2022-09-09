var dog = {};
dog.count;
// Function
var newFunction = function (cat) {
    console.log(cat);
};
var newFunction2 = function (cat) {
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("ROAR!");
var greeting = lion.greet();
console.log(greeting);
console.log(lion.sing);
