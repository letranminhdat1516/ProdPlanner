const express = require('express');
const router = express.Router();
const purchasePlanController = require('../controllers/purchasePlan.controller');

// Lập kế hoạch mua hàng
router.get('/', purchasePlanController.getPurchasePlans);
router.post('/', purchasePlanController.createPurchasePlan);

module.exports = router;
