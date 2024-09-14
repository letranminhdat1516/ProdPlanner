const express = require('express');
const router = express.Router();
const productionPlanController = require('../controllers/productionPlan.controller');

// Lập kế hoạch sản xuất
router.post('/', productionPlanController.createProductionPlan);
router.get('/', productionPlanController.getProductionPlans);
router.put('/:id', productionPlanController.updateProductionPlan);
router.delete('/:id', productionPlanController.deleteProductionPlan);

// Kiểm soát tiến độ sản xuất
router.get('/progress/:id', productionPlanController.getProductionProgress);
router.put('/progress/:id', productionPlanController.updateProductionProgress);

module.exports = router;
