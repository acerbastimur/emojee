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

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const {
      CardStore: {
        isFetchingProducts,
        requestNewProducts,
        updateProductCursor,
      },
    } = this.props;

    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowBottom = windowHeight + window.pageYOffset;
    const docTreshold = docHeight / 2;
    if (windowBottom >= docHeight - docTreshold && !isFetchingProducts) {
      console.log("fetching");

      updateProductCursor();
      requestNewProducts();
    }
  };

  render() {
    const {
      CardStore: { products, endOfProducts, productLimitPerRequest },
    } = this.props;

    return (
      <div className="grid">
        <div className="grid__search-container">
          <span className="grid__search-container_text">Sort by</span>
          <SortBox />
        </div>
        <div className="grid__items-container">
          {products.map(({ face, date, price, size }, index) => {
            return [
              <Card
                key={"card_" + index}
                face={face}
                size={size}
                price={price}
                date={date}
              />,
              index % (productLimitPerRequest - 1) === 0 && index !== 0 && (
                <Ad key={"ad_" + index} adIndex={index + 1} />
              ),
            ];
          })}
          <div className="grid__loading__container">
            <div className="grid__loading__text">
              <p>
                {endOfProducts
                  ? "~ end of the catalogue ~"
                  : "Loading ¯  _ ( ツ ) _ / ¯"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject("CardStore")(observer(CardGrid));
