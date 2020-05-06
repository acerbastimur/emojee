import { observable, decorate, action, computed } from "mobx";
import { fetchProducts } from "../services/GetProducts";

class CardStore {
  productCursor = 1; //  pagination cursor
  productLimitPerRequest = 20;
  _products = []; // store all products paginated
  selectedProductSort = null;
  endOfProducts = false;

  updateProductCursor = () => {
    this.productCursor += 1;
  };

  setProductSort = ({ sortType = null }) => {
    this.cleanStore();
    this.selectedProductSort = sortType;
    this.requestNewProducts();
  };

  requestNewProducts = async () => {
    console.log(this.endOfProducts);

    if (this.endOfProducts) return;
    const fetchOptions = {
      // defining request options
      cursor: this.productCursor,
      limit: this.productLimitPerRequest,
      sort: this.selectedProductSort,
    };

    try {
      const newProducts = await fetchProducts(fetchOptions);
      console.log(newProducts);

      if (newProducts.length === 0) {
        this.endOfProducts = true;

        return;
      }
      this._products = [...this._products, ...newProducts];
    } catch (error) {
      console.error("ERROR WHILE FETCHING PRODUCTS"); 
    }
  };

  get products() {
    return this._products;
  }

  get isFetchingProducts() {
    const productCountNeed = this.productCursor * this.productLimitPerRequest;
    const actualProductCount = this.products.length;
    return productCountNeed !== actualProductCount;
  }
  cleanStore() {
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
