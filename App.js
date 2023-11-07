import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    //wrapping in Array Data Structure
    [
      React.createElement("h1", {}, "I'm inside child tag"),
      React.createElement("h2", {}, "I'm another child"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Note we used ReactDOM. for creating root of react library

root.render(parent); // .render method will create heading element for browser by taking heading as an object
