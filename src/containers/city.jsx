// React
import React, { Component } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Actions
import { selectCity } from "../actions/index";
/* eslint-disable arrow-parens */

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, city } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className="list-group-item"
        onClick={() => this.props.selectCity(city)}
      >
        {name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
