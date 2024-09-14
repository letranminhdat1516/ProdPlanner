const resourceAllocationRepository = require('../repositories/resourceAllocation.repository');

exports.getResourceAllocations = async () => {
  return await resourceAllocationRepository.findAll();
};

exports.createResourceAllocation = async (data) => {
  return await resourceAllocationRepository.create(data);
};

exports.updateResourceAllocation = async (id, data) => {
  return await resourceAllocationRepository.update(id, data);
};
