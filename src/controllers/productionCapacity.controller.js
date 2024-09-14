const productionCapacityService = require('../services/productionCapacity.service');

// Lấy tất cả năng lực sản xuất
exports.getProductionCapacity = async (req, res) => {
  try {
    const productionCapacity = await productionCapacityService.getProductionCapacity();
    res.status(200).json(productionCapacity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy năng lực sản xuất theo ID
exports.getProductionCapacityById = async (req, res) => {
  try {
    const { id } = req.params;
    const productionCapacity = await productionCapacityService.getProductionCapacityById(id);
    
    if (!productionCapacity) {
      return res.status(404).json({ message: 'Năng lực sản xuất không tồn tại' });
    }

    res.status(200).json(productionCapacity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
