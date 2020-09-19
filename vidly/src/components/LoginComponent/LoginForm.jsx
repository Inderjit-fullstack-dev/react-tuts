import React, { Component } from "react";
import Input from "../common/InputComponent/Input";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { username, password } = this.state.account;
    if (username.trim() === "") errors.username = "Username is required";
    if (password.trim() === "") errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required";
      }
    }

    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submit");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="mt-5">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            type="text"
            value={account.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />

          <div className="form-group">
            <Input
              name="password"
              type="password"
              value={account.password}
              label="Password"
              error={errors.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
