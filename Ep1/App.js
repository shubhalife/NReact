/**
 * creating nested elemnts in react
 * <div id="parent">
    <div id="child">
        <h1>Im h1 tag</h1>
        <h2>Im h2 tag</h2>
    </div>
</div>
 */

const parent = React.createElement("div",
{id: "parent"},
React.createElement("div",
{id: "child"},
[React.createElement("h1",{id:"heading1"},"Im h1 tag"),React.createElement("h2",{id:"heading2"},"Im h2 tag")]));
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);