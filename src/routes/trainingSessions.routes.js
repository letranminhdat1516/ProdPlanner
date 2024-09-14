const express = require('express');
const router = express.Router();
const trainingSessionsController = require('../controllers/trainingSessions.controller');

router.post('/training-sessions', trainingSessionsController.createTrainingSession);
router.get('/training-sessions', trainingSessionsController.getTrainingSessions);

module.exports = router;
