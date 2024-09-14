const db = require('../models');
const Worker = db.workers;

exports.findAll = async () => {
  return await Worker.findAll();
};

exports.findById = async (id) => {
  return await Worker.findByPk(id);
};

exports.create = async (workerData) => {
  return await Worker.create(workerData);
};

exports.update = async (id, workerData) => {
  const worker = await Worker.findByPk(id);
  if (!worker) throw new Error('Worker not found');
  return await worker.update(workerData);
};

exports.delete = async (id) => {
  const worker = await Worker.findByPk(id);
  if (!worker) throw new Error('Worker not found');
  return await worker.destroy();
};
