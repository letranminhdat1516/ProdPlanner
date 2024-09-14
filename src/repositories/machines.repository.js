const db = require('../models');
const Machine = db.machines;

exports.findAll = async () => {
  return await Machine.findAll();
};

exports.findById = async (id) => {
  return await Machine.findByPk(id);
};

exports.create = async (machineData) => {
  return await Machine.create(machineData);
};

exports.update = async (id, machineData) => {
  const machine = await Machine.findByPk(id);
  if (!machine) throw new Error('Machine not found');
  return await machine.update(machineData);
};

exports.delete = async (id) => {
  const machine = await Machine.findByPk(id);
  if (!machine) throw new Error('Machine not found');
  return await machine.destroy();
};
