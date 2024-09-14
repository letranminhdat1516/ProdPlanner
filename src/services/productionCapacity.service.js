const productionCapacityRepository = require('../repositories/productionCapacity.repository');

exports.getProductionCapacity = async () => {
  return await productionCapacityRepository.findAll();
};

exports.getProductionCapacityById = async (id) => {
  return await productionCapacityRepository.findById(id);
};
