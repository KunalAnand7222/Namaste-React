// !whenever building a react app, first build its rough design using pen paper
/**
 * Header
 *  -logo
 * -nav
 * Body
 *  -search bar
 *  -restaurant container
 *      -restaurant card
 *          -image, name of res rating, cuisine, delivery time, rating
 * Footer
 *  -copywright
 *  -links
 *  -contact
 *  -address
 */
// header
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./imgg.png";
import apii from "./Utils";
const dt=apii();//utils.js store hardcoded data in form of function so we need to first call it .if its simple element there is no need to call it
const Header = () => (
  <>
    <div className="Header">
        <div className="logo-container">
            <img className="logo" src="https://marketplace.canva.com/EAGK6XNcgJM/1/0/1600w/canva-orange-and-yellow-simple-street-food-logo-P8-5uoYzOgo.jpg" alt="image"/>
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
  </>
);
// react will take all the properties and wrap into an object and passed to component
// below props is object 
// we can also destructre the props
const RestaurantCard=(props)=>{
  // const rest=({name,id})=>()  destructuring can also write like this
  // *cloudinaryImageId is the property of object which is used to get the image from cloudinary(cdn)
  const {name,cloudinaryImageId,avgRating,cuisines,costForTwo}=props.kk; //destructuring of props.kk
  return <>
    <div className="res-card">
    <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.kk.cloudinaryImageId} alt="image"/>
      <h3>{name}</h3>
      <h3>{avgRating+" Stars"}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  </>
};
const Body = () => (
    <>
    <div className="Body">
    {/* <div className="Body" style={{color:"red", backgroundColor:"blue"}}></div> */}
    {/* //!First {} → enter JavaScript mode in JSX. */}
    {/* //!Second {} → JavaScript object containing CSS properties. */}
        <div className="search">
            <input className="inp" type="text" placeholder="Search your restaurant menu"/>
        </div>
        <div className="res-container">
            {/* <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/> */}
            {/* <RestaurantCard name="KFC" rating="4.5 star" Delivery="30 min" cuisine="North Indian, Chinese"/> */}
            {dt.map((res)=><RestaurantCard key={res.id} kk={res}/>)}
            {/* we are using map so always pass key..it helps react to uniquely identify each element */}
            {/* //*passing as props to component */}
            {/* .join use to convert array to string */}
        </div>
    </div>
    </>
);
const Footer=()=>{
  return
}
const AppLayout = () => (
  <>
    <Header />
    <Body/>
    <Footer/>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// props: properties you passed to component work similar to function arguments.helps to build dynamic UI.
// *Config-Driven UI means the UI is generated from data (configuration) instead of being hardcoded.
// !if there will be no key in map ..react will re-render all cards when there is a change in one card but if we will pass key then only that card will re-render which is changed.
// and if we pass key it will only render the particular card which is changed 
// never use index as key because if we will add new card in between then all the cards after that will re-render but if we will pass unique id as key then only that card will re-render which is changed