const db = require('../models');
const SupplyChainPlan = db.supply_chain_plan;

exports.createSupplyChainPlan = async (planData) => {
  return await SupplyChainPlan.create(planData);
};

exports.findAll = async () => {
  return await SupplyChainPlan.findAll();
};

exports.findById = async (id) => {
  return await SupplyChainPlan.findByPk(id);
};

exports.update = async (id, planData) => {
  const plan = await SupplyChainPlan.findByPk(id);
  if (plan) {
    return await plan.update(planData);
  }
  return null;
};

exports.delete = async (id) => {
  const plan = await SupplyChainPlan.findByPk(id);
  if (plan) {
    return await plan.destroy();
  }
  return null;
};
