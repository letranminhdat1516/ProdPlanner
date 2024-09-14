const supplyChainPlanRepository = require('../repositories/supplyChainPlan.repository');

exports.createSupplyChainPlan = async (planData) => {
  return await supplyChainPlanRepository.createSupplyChainPlan(planData);
};

exports.getSupplyChainPlans = async () => {
  return await supplyChainPlanRepository.findAll();
};

exports.getSupplyChainPlanById = async (id) => {
  return await supplyChainPlanRepository.findById(id);
};

exports.updateSupplyChainPlan = async (id, planData) => {
  return await supplyChainPlanRepository.update(id, planData);
};

exports.deleteSupplyChainPlan = async (id) => {
  return await supplyChainPlanRepository.delete(id);
};
