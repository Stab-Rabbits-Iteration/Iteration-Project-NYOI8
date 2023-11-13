import React from "react";


const UserItems = props => {


  return (
    <div className={props.itemClass}>
      <p>Current user routine item</p>
      <img className={props.imageClass} src="https://static.vecteezy.com/system/resources/previews/002/476/287/original/3d-realistic-natural-beauty-cosmetic-product-for-face-or-body-care-on-glossy-background-free-vector.jpg" alt="" width="200px" />
    </div>
  );
};

export default UserItems;