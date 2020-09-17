// React
import React, { Component } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Components
import City from "./city";

// Actions
import setCities from "../actions";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    // eslint-disable-next-line arrow-parens
    return this.props.cities.map((city) => (
      <City
        name={city.name}
        address={city.address}
        slug={city.slug}
        key={city.name}
      />
    ));
  };

  render() {
    return <div className="cities">{this.renderList()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities: setCities }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
