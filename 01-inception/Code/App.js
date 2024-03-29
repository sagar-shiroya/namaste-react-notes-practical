const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// root.render(heading);

/**
 * For Complex DOM structure like:
 * <div id="parent">
 *      <div id="child">
 *          <h1> I am an h1 tag</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

root.render(parent);
