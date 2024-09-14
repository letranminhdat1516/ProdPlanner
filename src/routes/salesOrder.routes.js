const express = require('express');
const router = express.Router();
const salesOrdersController = require('../controllers/salesOrder.controller');

router.get('/', salesOrdersController.getSalesOrders);
router.get('/:id', salesOrdersController.getSalesOrderById);
router.post('/', salesOrdersController.createSalesOrder);
router.put('/:id', salesOrdersController.updateSalesOrder);
router.delete('/:id', salesOrdersController.deleteSalesOrder);

module.exports = router;
