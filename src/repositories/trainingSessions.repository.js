const db = require('../models');
const TrainingSessions = db.training_sessions;

exports.createTrainingSession = async (sessionData) => {
  return await TrainingSessions.create(sessionData);
};

exports.findAll = async () => {
  return await TrainingSessions.findAll();
};
