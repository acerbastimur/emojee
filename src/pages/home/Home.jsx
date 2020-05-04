import React, { Component } from "react";
import Header from "../../components/header";
import CardGrid from "../../components/cardGrid";
import HeadAd from "../../components/headAd";

import { Provider } from "mobx-react";
import CardStore from "../../stores/Card.store";

class Home extends Component {
  state = {};
  render() {
    return (
      <Provider CardStore={CardStore}>
        <Header />
        <HeadAd />
        <CardGrid />
      </Provider>
    );
  }
}

export default Home;
