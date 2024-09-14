const inventoryService = require('../services/inventory.service');

exports.getInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.getInventory();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInventoryById = async (req, res) => {
  try {
    const inventory = await inventoryService.getInventoryById(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInventory = async (req, res) => {
  try {
    const newInventory = await inventoryService.createInventory(req.body);
    res.status(201).json(newInventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const updatedInventory = await inventoryService.updateInventory(req.params.id, req.body);
    res.status(200).json(updatedInventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    await inventoryService.deleteInventory(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
