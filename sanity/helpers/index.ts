import { sanityFetch } from "../lib/live";
import { CATEGORIES_QUERY, PRODUCTS_QUERY, SALE_QUERY } from "./queries";

export const getSale = async () => {
  try {
    const products = await sanityFetch({
        query:SALE_QUERY
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error Fetching Sale data", error);
    return [];
  }
};


export const getAllProducts = async () => {
  try {
    const products = await sanityFetch({
        query:PRODUCTS_QUERY,
    });
    return products?.data || [];
  } catch (error) {
    console.error("All products fetching error", error);
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const products = await sanityFetch({
        query:CATEGORIES_QUERY,
    });
    return products?.data || [];
  } catch (error) {
    console.error("All categories fetching error", error);
    return [];
  }
};
