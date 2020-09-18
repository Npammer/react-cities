import React, { Component } from "react";

import { connect } from "react-redux";

class ActiveCity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="active-city">
        <h3>{props.activeCity.name}</h3>
        <p>{props.activeCity.address}</p>
        <img src={url} width="100%" />
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity,
  };
}

export default connect(mapReduxStateToProps)(ActiveCity);
