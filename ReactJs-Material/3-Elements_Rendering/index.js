// Rendering an Element into the DOM
// Let’s say there is a <div> somewhere in your HTML file:

<div id="root"></div>

// We call this a “root” DOM node because everything inside it will be managed by React DOM.

// Applications built with just React usually have a single root DOM node. 
// If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

// To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():

const element = <h1>Hello, world</h1>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);
