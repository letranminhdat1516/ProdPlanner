const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payroll.controller');

router.post('/', payrollController.createPayroll);
router.get('/', payrollController.getPayrolls);

module.exports = router;
