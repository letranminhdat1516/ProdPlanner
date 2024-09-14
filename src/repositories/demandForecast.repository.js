const db = require('../models');
const DemandForecast = db.demand_forecast;

// Tạo dự báo nhu cầu
exports.createDemandForecast = async (forecastData) => {
  return await DemandForecast.create(forecastData);
};

// Lấy tất cả dữ liệu dự báo
exports.getDemandForecast = async () => {
  return await DemandForecast.findAll();
};

// Lấy dự báo theo ID
exports.getDemandForecastById = async (id) => {
  return await DemandForecast.findByPk(id);
};

// Cập nhật dự báo nhu cầu
exports.updateDemandForecast = async (id, forecastData) => {
  const forecast = await DemandForecast.findByPk(id);
  if (!forecast) throw new Error('Dự báo nhu cầu không tồn tại');
  return await forecast.update(forecastData);
};

// Xóa dự báo nhu cầu
exports.deleteDemandForecast = async (id) => {
  const forecast = await DemandForecast.findByPk(id);
  if (!forecast) throw new Error('Dự báo nhu cầu không tồn tại');
  return await forecast.destroy();
};
