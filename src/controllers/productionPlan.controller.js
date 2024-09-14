const productionPlanService = require('../services/productionPlan.service');

exports.getProductionPlans = async (req, res) => {
  try {
    const plans = await productionPlanService.getProductionPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProductionPlan = async (req, res) => {
  try {
    const plan = await productionPlanService.createProductionPlan(req.body);
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProductionPlan = async (req, res) => {
  try {
    const updatedPlan = await productionPlanService.updateProductionPlan(req.params.id, req.body);
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProductionPlan = async (req, res) => {
  try {
    await productionPlanService.deleteProductionPlan(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Thêm dự báo nhu cầu sản phẩm
exports.createDemandForecast = async (req, res) => {
  try {
    const forecast = await productionPlanService.createDemandForecast(req.body);
    res.status(201).json(forecast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy dự báo nhu cầu sản phẩm
exports.getDemandForecast = async (req, res) => {
  try {
    const forecast = await productionPlanService.getDemandForecast();
    res.status(200).json(forecast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Theo dõi tiến độ sản xuất
exports.getProductionProgress = async (req, res) => {
  try {
    const progress = await productionPlanService.getProductionProgress();
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật tiến độ sản xuất
exports.updateProductionProgress = async (req, res) => {
  try {
    const updatedProgress = await productionPlanService.updateProductionProgress(req.params.id, req.body);
    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
