const workersRepository = require('../repositories/workers.repository');

exports.getWorkers = async () => {
  return await workersRepository.findAll();
};

exports.getWorkerById = async (id) => {
  return await workersRepository.findById(id);
};

exports.createWorker = async (workerData) => {
  return await workersRepository.create(workerData);
};

exports.updateWorker = async (id, workerData) => {
  return await workersRepository.update(id, workerData);
};

exports.deleteWorker = async (id) => {
  return await workersRepository.delete(id);
};
