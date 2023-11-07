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
 */const e=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm inside child tag"),React.createElement("h2",{},"I'm another child")])),t=ReactDOM.createRoot(document.getElementById("root"));t.render(e);// .render method will create heading element for browser by taking heading as an object
//# sourceMappingURL=index.44ba83da.js.map

//# sourceMappingURL=index.44ba83da.js.map
