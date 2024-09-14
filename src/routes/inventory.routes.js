const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller');

// GET all inventory
router.get('/', inventoryController.getInventory);

// GET inventory by ID
router.get('/:id', inventoryController.getInventoryById);

// POST create new inventory item
router.post('/', inventoryController.createInventory);

// PUT update inventory by ID
router.put('/:id', inventoryController.updateInventory);

// DELETE inventory by ID
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;
