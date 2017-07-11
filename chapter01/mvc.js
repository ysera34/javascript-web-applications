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


// 익명 함수로 범위를 캡슐화해서 불필요한 전역 변수 생성을 막았다.
var Person = function(name) {
    this.name = name;
}

// 생성자 함수의 이름은 카멜케이스로 표시해 다른 일반 함수와 구분하는 것이 관례다.
var bellinger = new Person("Bellinger");

assert(bellinger instanceof Person);
//Person("aaron"); // => undefinded

var Class = function() {
    var klass = function() {
        this.init.apply(this, arguments);
    };
    klass.prototype.init = function(){};
    return klass;
};

var Person = new Class;

Person.prototype.init = function(){
    
}

var person = new Person;