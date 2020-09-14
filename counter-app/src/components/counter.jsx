import React, { Component } from "react";
class counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div className="btn-group">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-info btn-sm"
          >
            Decrement
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  // handleIncrement = () => this.setState({ value: (this.state.value += 1) });

  // handleDecrement = () =>
  //   this.setState({
  //     value: this.state.value > 0 ? (this.state.value -= 1) : 0,
  //   });

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default counter;
