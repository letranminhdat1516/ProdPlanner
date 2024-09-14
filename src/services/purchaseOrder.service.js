const purchaseOrderRepository = require('../repositories/purchaseOrder.repository');

exports.getPurchaseOrders = async () => {
  return await purchaseOrderRepository.findAll();
};

exports.createPurchaseOrder = async (orderData) => {
  return await purchaseOrderRepository.create(orderData);
};

exports.updatePurchaseOrder = async (id, orderData) => {
  return await purchaseOrderRepository.update(id, orderData);
};

exports.deletePurchaseOrder = async (id) => {
  return await purchaseOrderRepository.delete(id);
};
