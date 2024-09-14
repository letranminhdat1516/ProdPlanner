const supplyChainPlanService = require('../services/supplyChainPlan.service');

exports.createSupplyChainPlan = async (req, res) => {
  try {
    const plan = await supplyChainPlanService.createSupplyChainPlan(req.body);
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSupplyChainPlans = async (req, res) => {
  try {
    const plans = await supplyChainPlanService.getSupplyChainPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSupplyChainPlanById = async (req, res) => {
  try {
    const plan = await supplyChainPlanService.getSupplyChainPlanById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Supply Chain Plan not found' });
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSupplyChainPlan = async (req, res) => {
  try {
    const updatedPlan = await supplyChainPlanService.updateSupplyChainPlan(req.params.id, req.body);
    if (!updatedPlan) {
      return res.status(404).json({ message: 'Supply Chain Plan not found' });
    }
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSupplyChainPlan = async (req, res) => {
  try {
    await supplyChainPlanService.deleteSupplyChainPlan(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
