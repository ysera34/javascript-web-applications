var assert = function(value, message) {
    if (!value) {
        console.log(message || (value + " does not equal true"));
        throw(message || (value + " does not equal true"));
    } else {
        console.log(message || (value + " equal true"));
    }
        
};

var assertEqual = function(value1, value2, message) {
    if (value1 !== value2) {
        console.log(message || (value1 + " does not equal " + value2));
        throw(message || (value1 + " does not equal " + value2));   
    } else {
        console.log(message || (value1 + " equal " + value2));
    }
};

var Person = function(name) {
    this.name = name;
}

var bellinger = new Person("Bellinger");

assert(bellinger instanceof Person);