const machinesService = require('../services/machines.service');

exports.getMachines = async (req, res) => {
  try {
    const machines = await machinesService.getMachines();
    res.status(200).json(machines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMachineById = async (req, res) => {
  try {
    const machine = await machinesService.getMachineById(req.params.id);
    if (!machine) {
      return res.status(404).json({ message: 'Machine not found' });
    }
    res.status(200).json(machine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMachine = async (req, res) => {
  try {
    const machine = await machinesService.createMachine(req.body);
    res.status(201).json(machine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMachine = async (req, res) => {
  try {
    const updatedMachine = await machinesService.updateMachine(req.params.id, req.body);
    res.status(200).json(updatedMachine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMachine = async (req, res) => {
  try {
    await machinesService.deleteMachine(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
