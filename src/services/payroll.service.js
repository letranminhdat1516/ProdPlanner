const payrollRepository = require('../repositories/payroll.repository');

exports.createPayroll = async (payrollData) => {
  return await payrollRepository.createPayroll(payrollData);
};

exports.getPayrolls = async () => {
  return await payrollRepository.findAll();
};
