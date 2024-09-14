const db = require('../models');
const PurchaseOrder = db.purchase_order;

exports.findAll = async () => {
  return await PurchaseOrder.findAll();
};

exports.create = async (orderData) => {
  return await PurchaseOrder.create(orderData);
};

exports.update = async (id, orderData) => {
  const order = await PurchaseOrder.findByPk(id);
  if (!order) throw new Error('Order not found');
  return await order.update(orderData);
};

exports.delete = async (id) => {
  const order = await PurchaseOrder.findByPk(id);
  if (!order) throw new Error('Order not found');
  return await order.destroy();
};
