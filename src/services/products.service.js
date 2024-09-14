const productsRepository = require('../repositories/products.repository');

exports.getProducts = async () => {
  return await productsRepository.findAll();
};

exports.getProductById = async (id) => {
  return await productsRepository.findById(id);
};

exports.createProduct = async (productData) => {
  return await productsRepository.create(productData);
};

exports.updateProduct = async (id, productData) => {
  return await productsRepository.update(id, productData);
};

exports.deleteProduct = async (id) => {
  return await productsRepository.delete(id);
};
