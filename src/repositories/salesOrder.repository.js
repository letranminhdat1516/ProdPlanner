const db = require('../models');
const SalesOrder = db.sales_orders;

exports.findAll = async () => {
  return await SalesOrder.findAll();
};

exports.findById = async (id) => {
  return await SalesOrder.findByPk(id);
};

exports.create = async (orderData) => {
  return await SalesOrder.create(orderData);
};

exports.update = async (id, orderData) => {
  const order = await SalesOrder.findByPk(id);
  if (!order) throw new Error('Order not found');
  return await order.update(orderData);
};

exports.delete = async (id) => {
  const order = await SalesOrder.findByPk(id);
  if (!order) throw new Error('Order not found');
  return await order.destroy();
};
