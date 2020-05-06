import { observable, decorate, action, computed } from "mobx";
import { fetchProducts } from "../services/GetProducts";

class CardStore {
  productCursor = 1; //  pagination cursor
  productLimitPerRequest = 20;
  _products = []; // store all products paginated
  selectedProductSort = null; // sort type of products
  endOfProducts = false;

  updateProductCursor = () => {
     this.productCursor += 1;
  };

  setProductSort = ({ sortType = null }) => {
    this.cleanStore();
    this.selectedProductSort = sortType; // set the product sort type
    this.requestNewProducts(); // get sorted products
  };

  requestNewProducts = async () => {
    if (this.endOfProducts) return; // if it's the end of the product, no need to fetch call

    const fetchOptions = {
      // defining request options
      cursor: this.productCursor,
      limit: this.productLimitPerRequest,
      sort: this.selectedProductSort,
    };

    try {
      const newProducts = await fetchProducts(fetchOptions); // fetch products

      if (newProducts.length === 0) {
        // if there is no product incoming, it should be end of the list
        this.endOfProducts = true; // set end of the list true
        return;
      }
      this._products = [...this._products, ...newProducts]; // merge incoming products with old ones
    } catch (error) {
      console.error("ERROR WHILE FETCHING PRODUCTS");
    }
  };

  get products() {
    return this._products;
  }

  get isFetchingProducts() {
    // for ex. , if cursor == 2 & limit == 10, there should be 20 products,
    // if cursor is 2 and product count on store is 10
    // that means it's been requesting new products

    const productCountNeed = this.productCursor * this.productLimitPerRequest; // calculate the product count that sould be
    const actualProductCount = this.products.length; // get actual product count on store
    return productCountNeed !== actualProductCount;
  }
  cleanStore() {
    // reset the store
    this.productCursor = 1;
    this._products = [];
    this.selectedProductSort = null;
  }
}

decorate(CardStore, {
  _products: observable,
  endOfProducts: observable,
  updateProductCursor: action,
  requestNewProducts: action,
  setProductSort: action,
  selectedProductSort: observable,
  products: computed,
  isFetchingProducts: computed,
  cleanStore: action,
});

export default new CardStore();
