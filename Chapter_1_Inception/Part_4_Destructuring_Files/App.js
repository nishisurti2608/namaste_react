// Creating Heading Element

// create element method will take 3 arguments in React 1: what tag you want to create 2: Properties of that tag as an object 3: What do you want to put inside tag

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
); // Note it comes from React (because we use React.) that is the core library of React

console.log(heading); // Object ( React Eleemnt)
// Creating root element for React
// DOM manipulation happens in root
// Whenever we are rendering something in React that is the job of React DOM

const root = ReactDOM.createRoot(document.getElementById("root")); // Note we used ReactDOM. for creating root of react library
//Whatever we will render we will render inside root

// Rendering heading in root

root.render(heading); // .render method will create heading element for browser (readable) by processing heading object
