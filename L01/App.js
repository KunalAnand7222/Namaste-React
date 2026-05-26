// <div id="parent">
//  <div id="child">
//    <h1>Hello React</h1>
//  </div>
//  <div id="child2">
//    <h1>Hello React2</h1>
//  </div>
// </div>
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello React2"),
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "Hello React3"),
  ),
]);
// first argument is the type of the element, second argument is the props or attribute of the element and third argument is the children of the element.
// for making structure like this start with parent then go deeper..
// if have multiple children wrap it into array and pass it as third argument

const heading = React.createElement(
  "h1",
  { id: "heading", style: { color: "red" } },
  "Hello React",
);
// heading is an object
// can also style but use object for styling ..style:{property:value}
const root1 = ReactDOM.createRoot(document.getElementById("root"));
//root1 is an object which has a method called render which is used to render the heading element on the screen
root1.render(heading);
root1.render(parent);
// it will replace the previous render with the new render because react only render one element at a time and it will replace the previous render with the new render. and only replace whatever inside root div not all other stuff outside root div
// props are the properties of the element which are used to style the element or to add attributes to the element.
// its totally wrong that react can only written inside jsx 
// library vs framework : react is a library bcz it can work even in small portion of application but angular is a framework bcz it can work only in the whole application.   
// Library: Small reusable code/tools that you use whenever needed.
// Framework: Complete structure that controls how your application works.