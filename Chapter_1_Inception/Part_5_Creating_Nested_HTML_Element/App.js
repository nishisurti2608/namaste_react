// Creating Parent nested Element
/**
 *
 * <div id = "parent">
 *  <div id="child">
 *  <h1>I'm inside child tag</h1>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "h1",
    { id: "child" },
    React.createElement("h1", {}, "I'm inside child tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Note we used ReactDOM. for creating root of react library

root.render(parent); // .render method will create heading element for browser by taking heading as an object
