const db = require('../models');
const Product = db.products;

exports.findAll = async () => {
  return await Product.findAll();
};

exports.findById = async (id) => {
  return await Product.findByPk(id);
};

exports.create = async (productData) => {
  return await Product.create(productData);
};

exports.update = async (id, productData) => {
  const product = await Product.findByPk(id);
  if (!product) throw new Error('Product not found');
  return await product.update(productData);
};

exports.delete = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) throw new Error('Product not found');
  return await product.destroy();
};
