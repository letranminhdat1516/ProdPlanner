const timeLogsRepository = require('../repositories/timeLogs.repository');

exports.createTimeLog = async (timeLogData) => {
  return await timeLogsRepository.createTimeLog(timeLogData);
};

exports.getTimeLogs = async () => {
  return await timeLogsRepository.findAll();
};
