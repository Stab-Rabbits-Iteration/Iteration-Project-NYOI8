import React from "react";
import { Link } from "react-router-dom";


const InputForm = props => {


  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label htmlFor="password">Username:</label>
        <input type="password" name="username" placeholder="Enter Password" />
        <Link >
          <button type="button">Login</button>
        </Link>
      </form>
    </>

  )
}

export default InputForm;