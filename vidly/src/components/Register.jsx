import React, { Component } from "react";
import Form from "./common/FormComponent/Form";
import Joi from "joi-browser";
import Input from "./common/InputComponent/Input";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  render() {
    return (
      <div className="mt-5">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "name", "name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
