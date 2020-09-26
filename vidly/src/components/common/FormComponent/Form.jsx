import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../InputComponent/Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, { abortEarly: false });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        value={data[name]}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default Form;
