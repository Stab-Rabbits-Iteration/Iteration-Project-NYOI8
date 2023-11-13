import React from "react";
import UserItems from "./UserItems.jsx";

const UserProducts = props => {

  // make a fetch request to database (local for MVP) for one of each product category;

  // pass in categories into UserItems components.

  // object coming in will have keys corresponding to the name of the type of product.

  // we'll 


  return (
    <div className={props.productClass}>
      {/* render userItems here */}
      <UserItems itemClass="userItem" imageClass="userItemImage" />
      {/* Extra renders for page structure */}
      <UserItems itemClass="userItem" imageClass="userItemImage" />
      <UserItems itemClass="userItem" imageClass="userItemImage" />
      <UserItems itemClass="userItem" imageClass="userItemImage" />
      <UserItems itemClass="userItem" imageClass="userItemImage" />
    </div>

  )
};

export default UserProducts;