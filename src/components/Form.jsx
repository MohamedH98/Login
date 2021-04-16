import React from "react";
import Input from './Input'
import Login from './Login'
import Register from './Register'


function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username"/>
      <Input type="passort" placeholder="Password"/>
      {(props.isRegistered) ? <Login /> : <Register/>}

    </form>
  );
}

export default Form;
