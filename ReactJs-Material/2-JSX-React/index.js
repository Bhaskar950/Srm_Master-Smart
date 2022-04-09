// React JSX is an extension to JavaScript.It enables developer to create virtual DOM using XML syntax. 
// It compiles down to pure JavaScript(React.createElement function calls).
// Since it compiles to JavaScript, it can be used inside any valid JavaScript code.
// For example, below codes are perfectly valid.

// Assign to a variable.

var greeting = <h1>Hello React!</h1>

// Assign to a variable based on a condition.

var canGreet = true; 
if(canGreet) { 
   greeting = <h1>Hello React!</h1> 
}

// Can be used as return value of a function.

function Greeting() { 
   return <h1>Hello React!</h1> 
   
} 
greeting = Greeting()