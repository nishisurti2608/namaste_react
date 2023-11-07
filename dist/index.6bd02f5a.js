// Creating Parent nested Element
/**
 *
 * <div id = "parent">
 *  <div id="child">
 *  <h1>I'm inside child tag</h1>
 * <h2>I'm another child</h2>
 *  </div>
 * </div>
 *
 */ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, //wrapping in Array Data Structure
[
    React.createElement("h1", {}, "I'm inside child tag"),
    React.createElement("h2", {}, "I'm another child")
]));
const root = ReactDOM.createRoot(document.getElementById("root")); // Note we used ReactDOM. for creating root of react library
root.render(parent); // .render method will create heading element for browser by taking heading as an object

//# sourceMappingURL=index.6bd02f5a.js.map
