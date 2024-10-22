import express from 'express';
import * as seatController from '../controllers/seatController.js';  // 引入控制器層


const router = express.Router();

router.get('/:scheduleID', seatController.getOrderedSeatByScheduleID);

export default router;