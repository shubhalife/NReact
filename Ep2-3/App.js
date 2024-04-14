import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = <h1>Ignite your App!!</h1>;

const Parent = () => (
  <div id="parent">
    <Heading2 />
    <Heading3 />
  </div>
);

const num = 1000;

const Heading2 = () => (
  <div>
    <h2>{num}</h2>
    <h2>This is functional component</h2>
  </div>
);

const Heading3 = () => {
  return <h2>This is functional1 component</h2>;
};

root.render(<Parent />);
