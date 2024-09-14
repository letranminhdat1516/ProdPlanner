const workersService = require('../services/workers.service');

exports.getWorkers = async (req, res) => {
  try {
    const workers = await workersService.getWorkers();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkerById = async (req, res) => {
  try {
    const worker = await workersService.getWorkerById(req.params.id);
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createWorker = async (req, res) => {
  try {
    const worker = await workersService.createWorker(req.body);
    res.status(201).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateWorker = async (req, res) => {
  try {
    const updatedWorker = await workersService.updateWorker(req.params.id, req.body);
    res.status(200).json(updatedWorker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteWorker = async (req, res) => {
  try {
    await workersService.deleteWorker(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
