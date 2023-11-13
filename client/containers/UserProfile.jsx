import React from "react";
import UserProducts from "./components/UserProducts.jsx";
import Recommendations from "./components/Recommendations.jsx";

const UserProfile = (props) => {
  // const response = fetch('/fetcher', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(

  // )

  const parsedRes = response.json()
  console.log(parsedRes);

  return (

    <div className={props.componentClass}>
      {/* will render User Products as a column on left side */}
      {/* will render recommendations box on the right side */}
      <UserProducts productClass='userProducts' />
      <Recommendations recommendationsClass='recommendations' />
    </div>
  )
}

export default UserProfile;