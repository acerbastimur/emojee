import React, { Component } from "react";
import Header from "../../components/header";
import CardGrid from "../../components/cardGrid";
import HeadAd from "../../components/headAd";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <HeadAd />
        <CardGrid />
      </>
    );
  }
}

export default Home;
