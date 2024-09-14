const inventoryRepository = require('../repositories/inventory.repository');

exports.getInventory = async () => {
  return await inventoryRepository.findAll();
};

exports.getInventoryById = async (id) => {
  return await inventoryRepository.findById(id);
};

exports.createInventory = async (inventoryData) => {
  return await inventoryRepository.create(inventoryData);
};

exports.updateInventory = async (id, inventoryData) => {
  const updatedInventory = await inventoryRepository.update(id, inventoryData);
  if (!updatedInventory) {
    throw new Error('Inventory item not found');
  }
  return updatedInventory;
};

exports.deleteInventory = async (id) => {
  const result = await inventoryRepository.delete(id);
  if (!result) {
    throw new Error('Inventory item not found');
  }
};
