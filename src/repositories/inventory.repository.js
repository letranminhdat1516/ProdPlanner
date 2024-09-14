const db = require('../models');
const Inventory = db.inventory;

exports.findAll = async () => {
  return await Inventory.findAll();
};

exports.findById = async (id) => {
  return await Inventory.findByPk(id);
};

exports.create = async (data) => {
  return await Inventory.create(data);
};

exports.update = async (id, data) => {
  const inventory = await Inventory.findByPk(id);
  if (inventory) {
    return await inventory.update(data);
  }
  return null;
};

exports.delete = async (id) => {
  const inventory = await Inventory.findByPk(id);
  if (inventory) {
    return await inventory.destroy();
  }
  return null;
};
