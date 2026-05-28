// npm: npm doesnot stands for node package manager..npm is a package manager used in Node.js to install, manage, and share JavaScript libraries and dependencies.
// package.json: is the main configuration file of a Node.js/React project that stores project details, dependencies, and scripts.
// A bundler is a tool that combines multiple files/modules of a project into optimized files for the browser.
// Parcel is a web application bundler used to bundle and optimize frontend projects like React apps.
// npm install -D parcel: -D dev dependency
// we wiil teel npm that i want parcel as a dev dependency because we only need it during development and not in production.
// parcel:^2.8.4:  ^ means if there is any minor update of parcel then it will automatically update to that version but if there is a major update then it will not update to that version because it may contain breaking changes.
// package-lock.json:stores the exact installed versions of those dependencies for consistent setup.
// package-lock.json keeps track of all installed version
// node_modules is the folder that contains all installed npm packages and their dependencies for a project.
// Dependencies are external packages/libraries that a project needs to work properly.
// every dependencies have its own package.json file which contains the details of that package and its dependencies.
// package-lock.json has integrity field which is used to verify the integrity of the package and its dependencies.
// whatever in local should be same in production  
// if you have paxkage-lock.json file yiu can easily create node_modules using npm install command because it will read the package-lock.json file and install the exact version of the dependencies.
// cd .. go back one folder
// npx is used to directly run a package without permanently installing it globally.
// cdn link is not a goodway to bring react in our project bcz it may cause performance issues and security vulnerabilities, and it also makes the app dependent on an external source which may not be reliable.
// npm install react or npm i react both are same

// Parcel: Dev build, Local server create, auto refreshing (HMR hot module replacement), file watching algo(in c++), caching(faster builds), image optimization , minification, bundling , compress, consistent hashing, code splitting
// consistent hashing: it generates a unique hash for each file based on its content, ensuring that only changed files are re-bundled, improving build performance.
// differential bundling: support older browser
// error handling
// can also run npx parcel index.html --https it will load as https://localhost:1234
// different dev and prod bundle
// when u are using npx parcel build index.html it will throw an error bcz by default react using entry point as App.js in package.json ..so first remove this from package.json and then run the command it will work fine
// browserList: it is a tool that allows developers to specify which browsers their project should support.
import React from "react";//React is just a varibale name we can use any name
import ReactDOM from "react-dom";