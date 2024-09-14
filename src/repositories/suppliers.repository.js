const db = require('../models');
const Supplier = db.suppliers;

exports.findAll = async () => {
  return await Supplier.findAll();
};

exports.findById = async (id) => {
  return await Supplier.findByPk(id);
};

exports.create = async (supplierData) => {
  return await Supplier.create(supplierData);
};

exports.update = async (id, supplierData) => {
  const supplier = await Supplier.findByPk(id);
  if (!supplier) throw new Error('Supplier not found');
  return await supplier.update(supplierData);
};

exports.delete = async (id) => {
  const supplier = await Supplier.findByPk(id);
  if (!supplier) throw new Error('Supplier not found');
  return await supplier.destroy();
};
