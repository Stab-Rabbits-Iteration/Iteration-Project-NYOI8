import React from "react";
import RecommendedItem from "./RecommendedItem.jsx";

const Recommendations = props => {


  return (
    <div className={props.recommendationsClass}>
      <RecommendedItem />
    </div>
  )

};

export default Recommendations;