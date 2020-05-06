import axios from "axios";
import { API_BASE_URL } from "../constants";

export const fetchProducts = async ({ cursor, limit, sort = null }) => {
  
  // set the product request url depends on if there is sorting option
  let productUrl = sort
    ? API_BASE_URL +
      `api/products?_page=${cursor}&_limit=${limit}&_sort=${sort}`
    : API_BASE_URL + `api/products?_page=${cursor}&_limit=${limit}`;

  return await axios
    .get(productUrl)
    .then(({ data }) => {
      return data;
    })
    .catch(({ error }) => {
      return error;
    });
};
