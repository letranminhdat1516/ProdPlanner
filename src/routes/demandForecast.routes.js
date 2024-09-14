const express = require('express');
const router = express.Router();
const demandForecastController = require('../controllers/demandForecast.controller');

// Tạo dự báo nhu cầu
router.post('/', demandForecastController.createDemandForecast);

// Lấy tất cả dự báo nhu cầu
router.get('/', demandForecastController.getDemandForecast);

// Lấy dự báo nhu cầu theo ID
router.get('/:id', demandForecastController.getDemandForecastById);

// Cập nhật dự báo nhu cầu theo ID
router.put('/:id', demandForecastController.updateDemandForecast);

// Xóa dự báo nhu cầu theo ID
router.delete('/:id', demandForecastController.deleteDemandForecast);

module.exports = router;
