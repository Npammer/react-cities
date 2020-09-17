import React, { Component } from "react";
/* eslint-disable arrow-parens */

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <ul className="list-group-item">{this.props.name}</ul>;
  }
}

export default City;
