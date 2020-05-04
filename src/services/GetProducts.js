import axios from "axios";
import { API_BASE_URL } from "../constants";

export const fetchProducts = async ({ page, limit, sort = null }) => {
  console.log(`Fetching products of page ${page}`);
  let productUrl = sort
    ? API_BASE_URL + `?_page=${page}&_limit=${limit}&_sort=${sort}`
    : API_BASE_URL + `?_page=${page}&_limit=${limit}`;

  return await axios
    .get(productUrl)
    .then(({ data }) => {
      return data;
    })
    .catch(({ error }) => {
      return error;
    });
};
