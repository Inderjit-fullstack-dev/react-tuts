import React, { Component } from "react";
class counter extends Component {
  state = {
    id: this.props.id,
    value: this.props.value,
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div className="btn-group">
          <button
            onClick={this.handleIncrement}
            className="btn btn-primary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={this.handleDecrement}
            className="btn btn-info btn-sm"
          >
            Decrement
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  handleIncrement = () => this.setState({ value: (this.state.value += 1) });

  handleDecrement = () =>
    this.setState({
      value: this.state.value > 0 ? (this.state.value -= 1) : 0,
    });

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default counter;
