const db = require('../models');
const PurchasePlan = db.purchase_plan;

exports.findAll = async () => {
  return await PurchasePlan.findAll();
};

exports.create = async (planData) => {
  return await PurchasePlan.create(planData);
};
