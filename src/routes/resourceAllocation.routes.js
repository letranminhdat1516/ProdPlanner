const express = require('express');
const router = express.Router();
const resourceAllocationController = require('../controllers/resourceAllocation.controller');

// Phân bổ nguồn lực
router.post('/', resourceAllocationController.createResourceAllocation);
router.get('/', resourceAllocationController.getResourceAllocations);
router.put('/:id', resourceAllocationController.updateResourceAllocation);

module.exports = router;
