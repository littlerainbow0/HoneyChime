const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController.js');

router.get('/getSchedules', scheduleController.getAllSchedules);
router.get('/getSchedules/:dessertType', scheduleController.getScheduleByDessertType);

router.post('/postSchedule', scheduleController.postSchedule);
router.put('/updateSchedule/:scheduleID', scheduleController.updateSchedule);
module.exports = router;