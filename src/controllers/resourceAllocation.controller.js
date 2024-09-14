const resourceAllocationService = require('../services/resourceAllocation.service');

exports.getResourceAllocations = async (req, res) => {
  try {
    const allocations = await resourceAllocationService.getResourceAllocations();
    res.status(200).json(allocations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createResourceAllocation = async (req, res) => {
  try {
    const allocation = await resourceAllocationService.createResourceAllocation(req.body);
    res.status(201).json(allocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateResourceAllocation = async (req, res) => {
  try {
    const updatedAllocation = await resourceAllocationService.updateResourceAllocation(req.params.id, req.body);
    res.status(200).json(updatedAllocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
