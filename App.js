/*const heading = React.createElement("h1", { id: "heading" }, ["Hello react how are you doing?", "I am an h1 tag"]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am an h1 Tag"), React.createElement("h2", {}, "I am an h2 Tag")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am an h1 Tag"), React.createElement("h2", {}, "I am an h2 Tag")])
    ]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);