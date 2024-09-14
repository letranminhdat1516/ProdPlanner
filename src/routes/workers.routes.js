const express = require('express');
const router = express.Router();
const workersController = require('../controllers/workers.controller');

router.get('/', workersController.getWorkers);
router.get('/:id', workersController.getWorkerById);
router.post('/', workersController.createWorker);
router.put('/:id', workersController.updateWorker);
router.delete('/:id', workersController.deleteWorker);

module.exports = router;
