const express = require('express');
const router = express.Router();
const productionCapacityController = require('../controllers/productionCapacity.controller');

// GET all production capacities
router.get('/', productionCapacityController.getProductionCapacity);

// GET production capacity by ID
router.get('/:id', productionCapacityController.getProductionCapacityById);

module.exports = router;
