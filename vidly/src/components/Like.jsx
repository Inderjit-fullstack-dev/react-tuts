import React, { Component } from "react";
import "./Like.css";

class Like extends Component {
  render() {
    return (
      <React.Fragment>
        <i
          className={this.getClasses()}
          onClick={() => this.props.onToggleLike(this.props.movie)}
        ></i>
      </React.Fragment>
    );
  }

  getClasses() {
    let classes = "fa ";
    classes += this.props.movie.like === true ? "fa-heart" : "fa-heart-o";
    return classes;
  }
}

export default Like;
