import React, { Component } from "react";
import "./cardGrid.css";
import Card from "../card";
import SortBox from "../sortBox";
import { observer, inject } from "mobx-react";
import Ad from "../ad/Ad";

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
          {getProducts.length > 0 ? (
            getProducts.map(({ face, date, id, price, size }, index) => {
              if (index % 19 === 0 && index !== 0) {
                // show an ad every 20 product
                return [
                  <Card
                    key={id}
                    face={face}
                    size={size}
                    price={price}
                    date={date}
                  />,
                  <Ad key={"ad_" + id} />,
                ];
              }
              return (
                <Card
                  key={id}
                  face={face}
                  size={size}
                  price={price}
                  date={date}
                />
              );
            })
          ) : (
            <div className="grid__loading__text">
              <p>Loading ¯ \ _ ( ツ ) _ / ¯ </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default inject("CardStore")(observer(CardGrid));
