const suppliersRepository = require('../repositories/suppliers.repository');

exports.getSuppliers = async () => {
  return await suppliersRepository.findAll();
};

exports.getSupplierById = async (id) => {
  return await suppliersRepository.findById(id);
};

exports.createSupplier = async (supplierData) => {
  return await suppliersRepository.create(supplierData);
};

exports.updateSupplier = async (id, supplierData) => {
  return await suppliersRepository.update(id, supplierData);
};

exports.deleteSupplier = async (id) => {
  return await suppliersRepository.delete(id);
};
