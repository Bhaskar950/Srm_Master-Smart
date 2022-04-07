// JavaScript Closures

//  JavaScript closures with the help of examples.

// Before you learn about closures, you need to understand two concepts:

// Nested Function
// Returning a function
// -------------------------------------------------------------------------

// JavaScript Nested Function

// In JavaScript, a function can also contain another function. This is called a nested function. For example,

// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John'); // Hi John

// In the above program, the greet() function contains the displayName() function inside of it.

// ---------------------------------------------------------------------------------

// Returning a Function
// In JavaScript, you can also return a function within a function. For example,

function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function

// Output

// function displayName() {
//       console.log('Hi' + ' ' + name);
// }
  
// Hi John


// In the above program, the greet() function is returning the displayName function definition.

// Here, the returned function definition is assigned to the g1 variable. When you print g1 using console.log(g1), you will get the function definition.

// To call the function stored in the g1 variable, we use g1() with parentheses.

// --------------------------------------------------------------------------------------

// JavaScript Closures

// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. For example,

// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

// Output

// function displayName() {
//       // accessing name variable
//       return 'Hi' + ' ' + name;
//   }
// Hi John

// In the above example, when greet() function is called, it returns the function definition of displayName.

// Here, g1 is a reference to the displayName() function.

// When g1() is called, it still has access to the greet() function.

// When we run console.log(g1), it returns the function definition.


// The concept of closure exists for other programming languages like Python, Swift, Ruby, etc.

// Let's have a look at another example.

// closure example

function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8

// In the above program, the calculate() function takes a single argument x and returns the function definition of the multiply() function. The multiply() function takes a single argument y and returns x * y.

// Both multiply3 and multiply4 are closures.

// The calculate() function is called passing a parameter x.When multiply3(6) and multiply4(2) are called, the multipy() function has access to the passed x argument of the outer calculate() function.

// --------------------------------------------------------------------

// Data Privacy

// JavaScript closure helps in the data privacy of the program. For example,

let a = 0;
function sum() {
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4


// In the above example, the sum() function returns the function definition of the increaseSum() function.

// The a variable is increased inside the increaseSum() function. However, the value of the a variable can also be changed outside of the function. In this case, a = a + 1; changes the value of the variable outside the function.

// Now, if you want the a variable to be increased only inside the function, you can use a closure. For example,

function sum() {
    let a = 0;
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5


// In the above example, the sum() function sets the value of a to 0 and returns the increaseSum() function.

// Because of the closure, even though sum() is already executed, increaseSum() still has access to a and can add 1 to a every time x() is called.

// And the a variable is private to the sum() function. It means that the a variable can only be accessed inside of the sum() function.

// Even if you declare a and use it, it does not affect the a variable inside of the sum() function.

// Note: Generally, closures are used for data privacy.

