const db = require('../models');
const Payroll = db.payroll;

exports.createPayroll = async (payrollData) => {
  return await Payroll.create(payrollData);
};

exports.findAll = async () => {
  return await Payroll.findAll();
};
