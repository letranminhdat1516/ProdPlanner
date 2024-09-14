const purchasePlanRepository = require('../repositories/purchasePlan.repository');

exports.getPurchasePlans = async () => {
  return await purchasePlanRepository.findAll();
};

exports.createPurchasePlan = async (planData) => {
  return await purchasePlanRepository.create(planData);
};
