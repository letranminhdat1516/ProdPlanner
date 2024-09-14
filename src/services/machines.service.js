const machinesRepository = require('../repositories/machines.repository');

exports.getMachines = async () => {
  return await machinesRepository.findAll();
};

exports.getMachineById = async (id) => {
  return await machinesRepository.findById(id);
};

exports.createMachine = async (machineData) => {
  return await machinesRepository.create(machineData);
};

exports.updateMachine = async (id, machineData) => {
  return await machinesRepository.update(id, machineData);
};

exports.deleteMachine = async (id) => {
  return await machinesRepository.delete(id);
};
