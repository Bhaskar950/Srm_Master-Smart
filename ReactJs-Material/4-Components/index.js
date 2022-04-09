// React Components



// Components in React basically return a piece of JSX code that tells what should be rendered on the screen. 
// In React, we mainly have two types of components: 
 
// Functional Components: 

// Functional components are simply javascript functions.
//  We can create a functional component in React by writing a javascript function. 
// These functions may or may not receive data as parameters, we will discuss this later in the tutorial. 
// Below example shows a valid functional component in React: 

const Democomponent=()=>
{
    return <h1>Welcome Message!</h1>;
}


// Class Components: 

// The class components are a little more complex than the functional components.
// The functional components are not aware of the other components in your program whereas the class components can work with each other.
// We can pass data from one class component to other class components. 
// We can use JavaScript ES6 classes to create class-based components in React.
// Below example shows a valid class-based component in React: 

class Democomponent extends React.Component
{
    render(){
          return <h1>Welcome Message!</h1>;
    }
}


// Rendering Components

// In our previous post on rendering elements in React we have seen how elements initialized with DOM tags are rendered using ReactDOM.render() method. 
// React is also capable of rendering user - defined components.
// To render a component in React we can initialize an element with a user - defined component and pass this element as the first parameter to ReactDOM.render() or directly pass the component as the first argument to the ReactDOM.render() method. 
// Below syntax shows how to initialize a component to an element: 
 

const elementName = <ComponentName />;


// n the above syntax, the ComponentName is the name of the user-defined component. 
// Note: The name of a component should always start with a capital letter. This is done to differentiate a component tag with html tags.
// Below example renders a component named Welcome to the screen: 

// Open your index.js file from your project directory, and make the given below changes:

// src index.js:



import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// This is a functional component 
const Welcome=()=>
{ 
        return <h1>Hello World!</h1> 
} 
  
ReactDOM.render( 
    <Welcome />, 
    document.getElementById("root") 
); 

