const trainingSessionsRepository = require('../repositories/trainingSessions.repository');

exports.createTrainingSession = async (sessionData) => {
  return await trainingSessionsRepository.createTrainingSession(sessionData);
};

exports.getTrainingSessions = async () => {
  return await trainingSessionsRepository.findAll();
};
