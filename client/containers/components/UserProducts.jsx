import React from "react";
import UserItems from "./UserItems.jsx";
import { useState, useEffect } from "react";

const UserProducts = props => {

  const [ready, setReady] = useState(false)
  const [myData, setData] = useState({})

  // make a fetch request to database (local for MVP) for one of each product category;
  const products = []

  useEffect(() => {
    fetch('/fetcher', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()
        // object coming in will have keys corresponding to the name of the type of product.
      )
      .then(data => {
        console.log('UserProfile.jsx - data: ', data)
        // keys: "face wash & cleansers", mists & essences, toners, night creams, sunscreen
        // pass in categories into UserItems components.
        setData(data);
        console.log(myData)

        // products.push(<div>{productClass}</div>)

        setReady(true);
      })
  }, [])


  if (ready) {
    console.log('in here')
    console.log(myData)
    for (let key in myData) {
      console.log(key)
      const productClass = key.split(' ')[key.split(' ').length - 1];
      console.log(productClass);
      products.push(<UserItems itemClass="product" src={myData[key].img_url} skinCondition={myData[key].skin_concern} skinType={myData[key].skin_type} productName={myData[key].name} productBrand={myData[key].brand_name} />)
    }
    // setReady(false)
  }


  //ready &&

  // for (let i = 0; i < 5; i++) {
  //   // const productClass = key.split(' ')[key.split(' ').length - 1];
  //   // console.log(productClass);
  //   products.push(<UserItems src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/38349/skin-care-cream-clipart-md.png" />)
  // }

  return (
    <div className={props.productClass}>
      {/* render userItems here */}
      {products}
    </div>

  )
};

export default UserProducts;