// productionPlan.repository.js
const db = require('../models');
const ProductionPlan = db.production_plan;

exports.findAll = async () => {
  return await ProductionPlan.findAll();
};

exports.create = async (data) => {
  return await ProductionPlan.create(data);
};

exports.update = async (id, data) => {
  const plan = await ProductionPlan.findByPk(id);
  if (plan) {
    return await plan.update(data);
  }
  return null;
};

exports.delete = async (id) => {
  const plan = await ProductionPlan.findByPk(id);
  if (plan) {
    return await plan.destroy();
  }
  return null;
};

// Progress-related methods
exports.updateProgress = async (id, progressData) => {
  const plan = await ProductionPlan.findByPk(id);
  if (plan) {
    return await plan.update({ progress: progressData.progress });
  }
  return null;
};

exports.getProgress = async (id) => {
  const plan = await ProductionPlan.findByPk(id);
  if (plan) {
    return plan.progress;
  }
  return null;
};
