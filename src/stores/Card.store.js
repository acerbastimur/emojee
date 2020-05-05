import { observable, decorate, action, computed } from "mobx";
import { fetchProducts } from "../services/GetProducts";

class CardStore {
  productCursor = 0; //  pagination cursor
  productLimitPerRequest = 20;
  products = []; // store all products paginated
  selectedProductSort = null;

  updateProductCursor = () => {
    this.productCursor += 1;
  };

  setProductSort = ({ sortType = null }) => {
    this.cleanStore();
    this.selectedProductSort = sortType;
    this.requestNewProducts();
  };

  requestNewProducts = async () => {
    const fetchOptions = {
      // defining request options
      cursor: this.productCursor,
      limit: this.productLimitPerRequest,
      sort: this.selectedProductSort,
    };

    try {
      const newProducts = await fetchProducts(fetchOptions);
      this.products = [...this.products, ...newProducts];
    } catch (error) {
      console.log("ERROR"); // TODO
    }
  };

  get getProducts() {
    return this.products;
  }

  cleanStore() {
    this.productCursor = 0;  
    this.products = []; 
    this.selectedProductSort = null;
  }
}

decorate(CardStore, {
  products: observable,
  updateProductCursor: action,
  requestNewProducts: action,
  setProductSort: action,
  selectedProductSort: observable,
  getProducts: computed,
  cleanStore: action,
});

export default new CardStore();
