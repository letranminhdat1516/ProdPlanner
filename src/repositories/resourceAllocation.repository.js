const db = require('../models');
const ResourceAllocation = db.resource_allocation;

exports.findAll = async () => {
  return await ResourceAllocation.findAll();
};

exports.create = async (data) => {
  return await ResourceAllocation.create(data);
};

exports.update = async (id, data) => {
  const allocation = await ResourceAllocation.findByPk(id);
  if (allocation) {
    return await allocation.update(data);
  }
  return null;
};
