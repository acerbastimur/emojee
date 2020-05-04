import React, { Component } from "react";
import "./cardGrid.css";
import Card from "../card";
import SortBox from "../sortBox";
import { observer, inject } from "mobx-react";

class CardGrid extends Component {
  async componentDidMount() {
    const {
      CardStore: { requestNewProducts },
    } = this.props;
    await requestNewProducts(); // get the first page of the products
  }
  render() {
    const {
      CardStore: { getProducts },
    } = this.props;

    return (
      <div className="grid">
        <div className="grid__search-container">
          <span className="grid__search-container_text">Sort by</span>
          <SortBox />
        </div>
        <div className="grid__items-container">
          {getProducts.map(({ face, date, id, price, size }) => (
            <Card
              key={id}
              content={face}
              size={size}
              price={price}
              date={date}
            />
          ))}
          {/*           <Card content="ᕙ༼ຈل͜ຈ༽ᕗ" size={25} price={4} date="2 Days Ago" />
           */}
        </div>
      </div>
    );
  }
}

export default inject("CardStore")(observer(CardGrid));
