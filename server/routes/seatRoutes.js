import express from 'express';
import * as seatController from '../controllers/seatController.js';  // 引入控制器層


const router = express.Router();

router.get('/getSeats/:scheduleID', seatController.getOrderedSeatByScheduleID);
router.get('/getSeats', seatController.getAllSeats);

export default router;