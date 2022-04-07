// Scope Chain

// The scope chain is how Javascript looks for variables. 
// When looking for variables through the nested scope, the inner scope first looks at its own scope.
// If the variable is not assigned locally, which is inside the inner function or block scope, then JavaScript will look at the outer scope of said function or block to find the variable.
// If Javascript could not find the variable in any of the outer scopes on the chain, it will throw a reference error.

// Let's take an example and go through this process step by step. Check the below code.

// Global variable
const userName = "Peter";

// Outer function
function calcAge(birthyear) {
  const currentYear = 2021;
  const age = currentYear - birthyear;

   // inner block
  if (age <= 60) {
    var working = true;
    const message = `Peter is still employed!`;
    console.log(message);
  }

  // inner function
  function yearsToRetire() {
    const retirement = 60 - age;
    console.log(`${userName} will be retired in ${retirement} years!`);
  }

  yearsToRetire();
}

calcAge(1975);

// In the above example,

// We have a global variable called userName.
// We have an outer function calcAge(), which is in the global scope.
// We have an inner function, yearsToRetire(), nested inside calcAge() function.
// Also, we have an if block inside the calcAge() function.
