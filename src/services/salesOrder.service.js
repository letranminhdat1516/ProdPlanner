const salesOrdersRepository = require('../repositories/salesOrder.repository');

exports.getSalesOrders = async () => {
  return await salesOrdersRepository.findAll();
};

exports.getSalesOrderById = async (id) => {
  return await salesOrdersRepository.findById(id);
};

exports.createSalesOrder = async (orderData) => {
  return await salesOrdersRepository.create(orderData);
};

exports.updateSalesOrder = async (id, orderData) => {
  return await salesOrdersRepository.update(id, orderData);
};

exports.deleteSalesOrder = async (id) => {
  return await salesOrdersRepository.delete(id);
};
