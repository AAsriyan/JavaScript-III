/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Without any other context, this always binds to the Window unless you put "use strict".
* 2. Implicitly binds with the object using dot notation
* 3. You can build new objects from constructor functions (new binding)
* 4. Explicilty binds within functions
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const person = {
    name: 'Billy',
    age: '15',
    speak: function() {
        // age cannot be found because this was omitted from ${age} so it is binding to the window.
        return `Hello, I am ${age} years old!`;
    }
}

// Principle 2

// code example for Implicit Binding

const person = {
    name: 'Billy',
    age: '15',
    speak: function() {
        return `Hello, I am ${this.age} years old!`;
    }
}

person.speak();

// Principle 3

// code example for New Binding

function GenericPerson(name) {
    this.name = name;
    this.age = 23;
}

const billy = new GenericPerson('Billy');

// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Billy',
    age: '15',
}

function speak() {
    return `Hello, I am ${this.age} years old!`;
}

speak.bind(person);