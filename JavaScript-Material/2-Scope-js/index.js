// JavaScript Variable Scope

// variable scope in JavaScript with the help of examples.

// Scope refers to the availability of variables and functions in certain parts of the code.

// In JavaScript, a variable has two types of scope:

// 1)Global Scope
// 2)Local Scope

// Global Scope
// A variable declared at the top of a program or outside of a function is considered a global scope variable.

// Let's see an example of a global scope variable.

// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello

// In the above program, variable a is declared at the top of a program and is a global variable. It means the variable a can be used anywhere in the program.
// --------------------------------------------------------------------------------------------

// The value of a global variable can be changed inside a function. For example,

// program to show the change in global variable

let b = "hello";

function greet() {
    b = 3;
}

// before the function call
console.log(b);

//after the function call
greet();
console.log(b); // 3


// In the above program, variable b is a global variable. The value of a is hello. Then the variable b is accessed inside a function and the value changes to 3.
// Hence, the value of b changes after changing it inside the function.

// ------------------------------------------------------------------------

// In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable.

// For example,

function greet() {
    a = "hello"
}

greet();

console.log(a); // hello

// In the above program, variable a is a global variable.

// If the variable was declared using let a = "hello", the program would throw an error.

// ------------------------------------------------------------------------

// Local Scope

// Example 1: Local Scope Variable

// program showing local scope of a variable

let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(c + d); // error

// Output

// helloWorld
// Uncaught ReferenceError: b is not defined

// In the above program, variable a is a global variable and variable b is a local variable. 
// The variable b can be accessed only inside the function greet.Hence, when we try to access variable b outside of the function, an error occurs.


// -----------------------------------------------------

// let is Block Scoped
// The let keyword is block-scoped (variable can be accessed only in the immediate block).

// program showing block-scoped concept
// global variable

let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();

// Output

// Hello World
// Hello World hello
// Uncaught ReferenceError: c is not defined

// In the above program, variable

// a is a global variable. It can be accessed anywhere in the program.
// b is a local variable. It can be accessed only inside the function greet.
// c is a block-scoped variable. It can be accessed only inside the if statement block.
// Hence, in the above program, the first two console.log() work without any issue.

// However, we are trying to access the block-scoped variable c outside of the block in the third console.log(). 
// This will throw an error.