// // Difference of Props and State.

// // We have already learned about Props and we got to know that Props are also objects that hold information to control the behavior of that particular component, sounds familiar to State indeed but props and states are nowhere near be same. Let us differentiate the two.
 

// // Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.


// States can be used in Class Components, Functional components with the use of React Hooks (useState and other methods) while Props don’t have this limitation.
// // While Props are set by the parent component, State is generally updated by event handlers.


// React components has a built-in state object.

// The state object is where you store property values that belongs to the component.

// When the state object changes, the component re-renders.

// Creating the state Object
// The state object is initialized in the constructor:

// Specify the state object in the constructor method:

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}



// Functional based approach

// With the advent of Hooks, we can manage the State right in our functional components. 
// No more converting the functional components to class components!useState(), useEffect() are few examples of React Hooks.
// We will be using useState() for now.



// Keep in mind, Hooks don’t work inside classes. They let you use React without classes.

// Let us re write the Todo Component as a function and declare the state variables just like we did in the class component.

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { name: "Buy groceries", done: false },
    { name: "Pay rent", done: false }
  ]);
}


// If you observe, this is a functional component and with the use of hook, useState() the code looks much clean. Isn't it? Don't worry about the syntax, I'm going to break it down for you going further.

const [todo, setTodo] = useState("");

