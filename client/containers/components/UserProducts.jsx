import React from "react";
import UserItems from "./UserItems.jsx";

const UserProducts = props => {


  return (
    <div className={props.productClass}>
      {/* render userItems here */}
      <UserItems itemClass="userItem" imageClass="userItemImage" />
    </div>

  )
};

export default UserProducts;