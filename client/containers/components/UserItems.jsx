import React from "react";


const UserItems = props => {

  //  // itemClass = { productClass } src = { data[key].img_url } skinCondition = { data[key].skin_concern } skinType = { data[key].skin_type } productName = { data[key].name } productBrand = { data[key].brand_name }

  console.log(props.src)

  return (
    <div className={props.itemClass}>
      <p>{props.productName}</p>
      <p>Current user routine {props.productClass}*</p>
      <img className={props.productClass} src={props.src} />
    </div>
  );
};

export default UserItems;