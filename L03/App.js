// "scripts": {
//     "start": "parcel index.html",
//     "build": "parcel build index.html",
//     "test": "jest"
//   }, we can change package.json file to add scripts for start, build and test. so that we can run these commands using npm start, npm build and npm test instead of npx parcel index.html.
import React from "react";
// import ReactDOM from "react-dom"; used in older way
import ReactDOM from "react-dom/client"; //contains react 18 features

// React.createElement=> object=> HTML element(render)
// index.html and package.json should be in same directory else npm start will not work
const heading = React.createElement(
  "h1",
  { id: "heading", style: { color: "red" } },
  "Heeleeee react",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// jsx is easier syntax to create react element..we can write react without even jsx using react.createElement
// jsx: html like code inside javascript
const jsxHeading = (
  <h1 id="heading" style={{ color: "red" }}>
    Hello React
  </h1>
);
// if you wrie in multiple line use ()paranthesis it helps babel to understand strt and end oj jsx.
// js engine understand es6 and older version of javascript but it does not understand jsx so we need to convert jsx into react element using babel.
// heading=jsxHeading
// JSX is not actual HTML inside JavaScript.It is an HTML-like syntax that gets converted into JavaScript by Babel/React.It is used to create react element.
// babel is a tool that converts jsx into react element and it also converts modern javascript into older javascript for better browser compatibility.It is also used to convert typescript into javascript.
// babel is a js compiler..transpile jsx code to react code.
// babel is converting jsx to React.createElement() code..
const heading2 = (
  <h1 className="heading2" style={{ color: "red" }}>
    Hello React2
  </h1>
);
// in jsx we use className instead of class bcz class is reserved keyword in js.
// if you have to give attribute to jsx use camelCase.
const imge = (
  <img
    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    alt="google logo"
  />
);
root.render(imge);
const heading3 = <h1>lorem</h1>;
root.render(heading3);
// components: reusable piece of code that returns a react element.
//
// ! Important
// ? Question
// * Highlight

// !React component:
// 1. Functional component: it is a function that returns a react element.(new)
// * it is normal js function which returns jsx or react element..it is also called stateless component because it does not have state and lifecycle methods.
// 2. Class component: it is a class that extends React.Component and has a render method that returns a react element.(old)
const HeadingComponent = () => {
  return <h1>Heading Component</h1>;
};
const HeadingComponent2 = () => <h1>Heading Component2</h1>;
// component composition: it is the process of combining multiple components to create a new component.nested component
const Heading3 = () => (
  // <HeadingComponent2/> it will thrwo an error bcz jsx should have only one parent element..so we can wrap it inside a div.
  <div id="parent">
    <HeadingComponent /> //it will render headingcomponent inside heading3 component
    <h1> Heading</h1>
  </div>
);
const Heading4 = () => (
  <>
    <HeadingComponent2 />
    <h1> Heading</h1>
  </>
);
// we can also use react fragment instead of div to wrap multiple elements.it is just a wrapper for multiple elements.  
root.render(<Heading3/>);
// <Heading3/> to render functional component while heading for rendering react element
// react element iinside component
const ele=<h1>hello world element</h1>;
const num=1000;
const Heading5=()=>{
  return <> 
  {ele} // we can also use react element inside component
  {num} // we can also use js expression inside component
  {console.log("hello")}
  <h1>Heading5</h1>
  </>
}
// we can insert any js code inside {}in jsx..it can be variable, function, object, array etc
root.render(<Heading5/>);
// <hh/> to render funcitonal component inside a component while {ele} to render react element inside a component.
// react component should start with capital letter..if it starts with small letter it will be treated as html element.
const Comp=()=>{
  return (
    <div>
      {Ele}//it doesnot blindly run this..it sanitize whatever data is then run..it prevents cross site scripting attack.
    </div>
  );
}
const Ele=<Comp />;
// root.render(Ele);
// create an infinite loop by rendering component inside itself
// !Cross-Site Scripting (XSS) attack is a web security attack where an attacker injects malicious JavaScript into a website.
// *for rendering a functional component.. we can either use <compName/> or <compName></compName> both are same.
// can also call {compName()}..but try to avoid..