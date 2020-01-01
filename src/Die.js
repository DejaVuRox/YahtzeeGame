import React, { Component } from "react";
import "./Die.scss";

class Die extends Component {
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.props.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
