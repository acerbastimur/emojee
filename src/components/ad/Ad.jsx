import React, { Component } from "react";
import "./ad.css";
import { API_BASE_URL } from "../../constants";

import PropTypes from "prop-types";

class Ad extends Component {
  static propTypes = {
    adIndex: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  onAdLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { isLoading } = this.state;
    const { adIndex } = this.props;

    return (
      <div className="card">
        {isLoading ? (
          <div className="card__loading">
            <p>Loading ¯ \ _ ( ツ ) _ / ¯ </p>
          </div>
        ) : null}
        <img
          src={API_BASE_URL + "ads/?r=" + adIndex}
          alt="Ad"
          className="card__img"
          onLoad={this.onAdLoaded}
        />
      </div>
    );
  }
}

export default Ad;
