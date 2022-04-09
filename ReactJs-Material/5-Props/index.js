// React Props

// Props are arguments passed into React components.

// Props are passed to components via HTML attributes.

// props stands for properties.

// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:

// Example

// Add a "brand" attribute to the Car element:

const myelement = <Car brand="Ford" />;

// The component receives the argument as a props object:

// Example

// Use the brand attribute in the component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}



// Pass Data

// Props are also how you pass data from one component to another, as parameters.

// Example
// Send the "brand" property from the Garage component to the Car component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));


