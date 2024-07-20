import axios from 'axios';

const apiurl = '';

export const getProducts = async (filters) => {
  const response = await axios.get(`${apiurl}/products`, { params: filters });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${apiurl}/products/${id}`);
  return response.data;
};
