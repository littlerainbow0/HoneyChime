import express from 'express';
import * as scheduleController from '../controllers/scheduleController.js';  // 引入控制器層


const router = express.Router();

router.get('/getSchedules', scheduleController.getAllSchedules);
router.get('/getSchedules/:dessertType', scheduleController.getScheduleByDessertType);

router.post('/postSchedule', scheduleController.postSchedule);
router.put('/updateSchedule/:scheduleID', scheduleController.updateSchedule);

export default router;