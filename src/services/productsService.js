import { PRODUCTS } from '../data/products';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const getProducts = async () => {
  await delay(600);
  return PRODUCTS;
};

export const getProductById = async (id) => {
  await delay(500);
  return PRODUCTS.find(p => p.id === id) ?? null;
};

export const getProductsByCategory = async (categoryId) => {
  await delay(600);
  return PRODUCTS.filter(p => p.category === categoryId);
};
