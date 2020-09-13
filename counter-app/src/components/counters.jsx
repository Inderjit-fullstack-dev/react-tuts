import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            id={counter.id}
            value={counter.value}
          >
            <p>Title #{counter.id} </p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;
