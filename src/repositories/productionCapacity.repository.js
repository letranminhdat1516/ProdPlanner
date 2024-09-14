const db = require('../models');
const ProductionCapacity = db.production_capacity;

exports.findAll = async () => {
  return await ProductionCapacity.findAll();
};

exports.findById = async (id) => {
  return await ProductionCapacity.findByPk(id);
};
