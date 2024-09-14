const purchaseOrderService = require('../services/purchaseOrder.service');

exports.getPurchaseOrders = async (req, res) => {
  try {
    const orders = await purchaseOrderService.getPurchaseOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPurchaseOrder = async (req, res) => {
  try {
    const order = await purchaseOrderService.createPurchaseOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePurchaseOrder = async (req, res) => {
  try {
    const updatedOrder = await purchaseOrderService.updatePurchaseOrder(req.params.id, req.body);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePurchaseOrder = async (req, res) => {
  try {
    await purchaseOrderService.deletePurchaseOrder(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
