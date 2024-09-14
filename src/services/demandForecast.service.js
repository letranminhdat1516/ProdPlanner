const demandForecastRepository = require('../repositories/demandForecast.repository');

// Tạo dự báo nhu cầu
exports.createDemandForecast = async (forecastData) => {
  return await demandForecastRepository.createDemandForecast(forecastData);
};

// Lấy tất cả dự báo nhu cầu
exports.getDemandForecast = async () => {
  return await demandForecastRepository.getDemandForecast();
};

// Lấy dự báo theo ID
exports.getDemandForecastById = async (id) => {
  return await demandForecastRepository.getDemandForecastById(id);
};

// Cập nhật dự báo nhu cầu
exports.updateDemandForecast = async (id, forecastData) => {
  return await demandForecastRepository.updateDemandForecast(id, forecastData);
};

// Xóa dự báo nhu cầu
exports.deleteDemandForecast = async (id) => {
  return await demandForecastRepository.deleteDemandForecast(id);
};
