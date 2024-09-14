const db = require('../models');
const TimeLogs = db.time_logs;

exports.createTimeLog = async (timeLogData) => {
  return await TimeLogs.create(timeLogData);
};

exports.findAll = async () => {
  return await TimeLogs.findAll();
};
