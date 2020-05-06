import React, { Component } from "react";
import "./cardGrid.css";
import Card from "../card";
import SortBox from "../sortBox";
import { observer, inject } from "mobx-react";
import Ad from "../ad/Ad";

class CardGrid extends Component {
  async componentDidMount() {
    const {
      CardStore: { requestNewProducts, updateProductCursor },
    } = this.props;

    await requestNewProducts(); // get the first page of the products
    updateProductCursor();
    await requestNewProducts(); // get the second page at the first of the products for UX

    window.addEventListener("scroll", this.handleScroll); // listen to scrool events
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // remove scroll listener if unmount
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
        : document.documentElement.offsetHeight; // detect user's window height

    const body = document.body;
    const html = document.documentElement;

    const docHeight = Math.max(
      //detect document's height
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowBottom = windowHeight + window.pageYOffset; // calculate users window's position

    // calculate document's %20,
    //when user scrolls to page's last %20, we'll request new products
    const docTreshold = docHeight * 0.2;

    if (windowBottom >= docHeight - docTreshold && !isFetchingProducts) {
      // if we aren't fetching products now and get the bottom of document
      updateProductCursor(); // update the product pagination cursor
      requestNewProducts(); // request new products
    }
  };

  render() {
    const {
      CardStore: { products, endOfProducts },
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
              index % 19 === 0 && index !== 0 && ( // if it's the 19.th product, add an ad to grid
                <Ad
                  key={
                    "ad_" + index  
                  }
                  adIndex={index + 1}
                />
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
