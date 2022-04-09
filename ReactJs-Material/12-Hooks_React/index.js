// Introducing Hooks

// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



// State Hook

// This example renders a counter. When you click the button, it increments the value:

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


// Here, useState is a Hook(we’ll talk about what this means in a moment).We call it inside a function component to add some local state to it. 
// React will preserve this state between re - renders.useState returns a pair: the current state value and a function that lets you update it.
// You can call this function from an event handler or somewhere else.It’s similar to this.setState in a class, except it doesn’t merge the old and new state together. 
// (We’ll show an example comparing useState to this.state in Using the State Hook.)

// The only argument to useState is the initial state.In the example above, it is 0 because our counter starts from zero. 
// Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want.The initial state argument is only used during the first render.



// Using the State Hook

// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

// The introduction page used this example to get familiar with Hooks:

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



// Using the Effect Hook

// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

// The Effect Hook lets you perform side effects in function components:

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



// Rules of Hooks

// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

// Hooks are JavaScript functions, but you need to follow two rules when using them. We provide a linter plugin to enforce these rules automatically:

// Only Call Hooks at the Top Level
// Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

// Building Your Own Hooks

// 

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


// Now let’s say that our chat application also has a contact list, and we want to render names of online users with a green color. 
// We could copy and paste similar logic above into our FriendListItem component but it wouldn’t be ideal:

import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}