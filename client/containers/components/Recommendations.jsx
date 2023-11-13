import React from "react";
import RecommendedItem from "./RecommendedItem.jsx";

const Recommendations = props => {


  return (
    <div className={props.recommendationsClass}>
      <h2>Your Recommendations:</h2>
      <RecommendedItem componentClass="recommendedItem" imageClass="recommendedItemImage" />
    </div>
  )

};

export default Recommendations;