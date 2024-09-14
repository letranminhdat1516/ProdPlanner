const express = require('express');
const router = express.Router();
const timeLogsController = require('../controllers/timeLogs.controller');

router.post('/', timeLogsController.createTimeLog);
router.get('/', timeLogsController.getTimeLogs);

module.exports = router;
