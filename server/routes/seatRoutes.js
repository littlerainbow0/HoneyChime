const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController.js');

router.get('/:scheduleID', seatController.getOrderedSeatByScheduleID);

module.exports = router;