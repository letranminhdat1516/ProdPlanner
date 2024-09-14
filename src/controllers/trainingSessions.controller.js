const trainingSessionsService = require('../services/trainingSessions.service');

exports.createTrainingSession = async (req, res) => {
  try {
    const session = await trainingSessionsService.createTrainingSession(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTrainingSessions = async (req, res) => {
  try {
    const sessions = await trainingSessionsService.getTrainingSessions();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
