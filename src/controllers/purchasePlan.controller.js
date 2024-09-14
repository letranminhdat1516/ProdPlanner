const purchasePlanService = require('../services/purchasePlan.service');

exports.getPurchasePlans = async (req, res) => {
  try {
    const plans = await purchasePlanService.getPurchasePlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPurchasePlan = async (req, res) => {
  try {
    const plan = await purchasePlanService.createPurchasePlan(req.body);
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
