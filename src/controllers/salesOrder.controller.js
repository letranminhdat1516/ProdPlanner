const salesOrdersService = require('../services/salesOrder.service');

exports.getSalesOrders = async (req, res) => {
  try {
    const orders = await salesOrdersService.getSalesOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSalesOrderById = async (req, res) => {
  try {
    const order = await salesOrdersService.getSalesOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Sales order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSalesOrder = async (req, res) => {
  try {
    const order = await salesOrdersService.createSalesOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSalesOrder = async (req, res) => {
  try {
    const updatedOrder = await salesOrdersService.updateSalesOrder(req.params.id, req.body);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSalesOrder = async (req, res) => {
  try {
    await salesOrdersService.deleteSalesOrder(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
