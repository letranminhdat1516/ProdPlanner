const demandForecastService = require('../services/demandForecast.service');

// Tạo dự báo nhu cầu
exports.createDemandForecast = async (req, res) => {
  try {
    const forecast = await demandForecastService.createDemandForecast(req.body);
    res.status(201).json(forecast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả dữ liệu dự báo
exports.getDemandForecast = async (req, res) => {
  try {
    const forecasts = await demandForecastService.getDemandForecast();
    res.status(200).json(forecasts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy dự báo theo ID
exports.getDemandForecastById = async (req, res) => {
  try {
    const forecast = await demandForecastService.getDemandForecastById(req.params.id);
    if (!forecast) {
      return res.status(404).json({ message: 'Dự báo nhu cầu không tồn tại' });
    }
    res.status(200).json(forecast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật dự báo nhu cầu
exports.updateDemandForecast = async (req, res) => {
  try {
    const updatedForecast = await demandForecastService.updateDemandForecast(req.params.id, req.body);
    res.status(200).json(updatedForecast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa dự báo nhu cầu
exports.deleteDemandForecast = async (req, res) => {
  try {
    await demandForecastService.deleteDemandForecast(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
