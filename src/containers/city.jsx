// React
import React, { Component } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Actions
import { setActiveCity } from "../actions/index";
/* eslint-disable arrow-parens */

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li
        className="list-group-item"
        onClick={() => props.setActiveCity(props.city)}
      >
        {this.props.name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
