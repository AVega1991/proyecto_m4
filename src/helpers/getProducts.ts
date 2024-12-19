import axios from "axios";

export const getProducts = async (): Promise<IProduct[]> => {
  const fetch = await axios.get(`${process.env.API_URL}/products`);
  return fetch.data;
};
