const express = require('express');
const router = express.Router();
const supplyChainPlanController = require('../controllers/supplyChainPlan.controller');

router.post('/', supplyChainPlanController.createSupplyChainPlan);
router.get('/', supplyChainPlanController.getSupplyChainPlans);
router.get('/:id', supplyChainPlanController.getSupplyChainPlanById);
router.put('/:id', supplyChainPlanController.updateSupplyChainPlan);
router.delete('/:id', supplyChainPlanController.deleteSupplyChainPlan);

module.exports = router;
