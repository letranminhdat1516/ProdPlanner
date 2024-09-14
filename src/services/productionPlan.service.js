const productionPlanRepository = require('../repositories/productionPlan.repository');

// Các chức năng đã có
exports.getProductionPlans = async () => {
  return await productionPlanRepository.findAll();
};

exports.createProductionPlan = async (productionPlanData) => {
  return await productionPlanRepository.create(productionPlanData);
};

exports.updateProductionPlan = async (id, productionPlanData) => {
  const result = await productionPlanRepository.update(id, productionPlanData);
  if (!result) {
    throw new Error('Production Plan not found');
  }
  return result;
};

exports.deleteProductionPlan = async (id) => {
  const result = await productionPlanRepository.delete(id);
  if (!result) {
    throw new Error('Production Plan not found');
  }
};

// Cập nhật và lấy tiến độ sản xuất
exports.updateProductionProgress = async (id, progressData) => {
  if (progressData.progress > 100) {
    progressData.progress = 100; 
  }

  const plan = await ProductionPlan.findByPk(id);
  if (!plan) throw new Error('Kế hoạch sản xuất không tồn tại');
  return await plan.update({ progress: progressData.progress });
};

exports.getProductionProgress = async (id) => {
  const progress = await productionPlanRepository.getProgress(id);
  if (progress === null) {
    throw new Error('Production Plan progress not found');
  }
  return progress;
};
