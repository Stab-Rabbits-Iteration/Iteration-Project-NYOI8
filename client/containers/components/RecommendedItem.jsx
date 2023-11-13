import React from "react";


const RecommendedItem = props => {


  return (
    <div className={props.componentClass}>
      <p>Recommended peau you!</p>
      <img className={props.imageClass} src="https://static.vecteezy.com/system/resources/previews/002/476/287/original/3d-realistic-natural-beauty-cosmetic-product-for-face-or-body-care-on-glossy-background-free-vector.jpg" />
    </div>
  )
}

export default RecommendedItem;