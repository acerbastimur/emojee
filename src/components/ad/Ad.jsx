import React, { Component } from "react";
import "./ad.css";
import { API_BASE_URL } from "../../constants";

class Ad extends Component {
  state = {
    isLoading: true,
    adImgUrl: null,
  };

  onAdLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  componentDidMount() {
    const uniqueAdId = new Date().valueOf(); // create a unique number based on time
    let adUrl = API_BASE_URL + `ads/?r=${uniqueAdId}`;
    this.setState({
      adImgUrl: adUrl,
    });
  }
  render() {
    const { isLoading, adImgUrl } = this.state;

    return (
      <div className="card">
        {isLoading ? (
          <div className="card__loading">
            <p>Loading ¯ \ _ ( ツ ) _ / ¯ </p>
          </div>
        ) : null}
        <img
          src={adImgUrl}
          alt="Ad"
          className="card__img"
          onLoad={this.onAdLoaded}
        />
      </div>
    );
  }
}

export default Ad;
