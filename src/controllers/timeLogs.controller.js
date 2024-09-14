const timeLogsService = require('../services/timeLogs.service');

exports.createTimeLog = async (req, res) => {
  try {
    const timeLog = await timeLogsService.createTimeLog(req.body);
    res.status(201).json(timeLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTimeLogs = async (req, res) => {
  try {
    const timeLogs = await timeLogsService.getTimeLogs();
    res.status(200).json(timeLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
