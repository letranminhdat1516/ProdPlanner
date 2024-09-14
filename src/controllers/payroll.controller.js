const payrollService = require('../services/payroll.service');

exports.createPayroll = async (req, res) => {
  try {
    const payroll = await payrollService.createPayroll(req.body);
    res.status(201).json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPayrolls = async (req, res) => {
  try {
    const payrolls = await payrollService.getPayrolls();
    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
