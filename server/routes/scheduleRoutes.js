import express from 'express';
import * as scheduleController from '../controllers/scheduleController.js';  // 引入控制器層
import * as authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/getSchedules', scheduleController.getAllSchedules);
router.get('/getSchedules/:dessertType', scheduleController.getScheduleByDessertType);

router.post('/postSchedule', authMiddleware.isAdmin, scheduleController.postSchedule);

router.put('/updateSchedule/:scheduleID', authMiddleware.isAdmin, scheduleController.updateSchedule);

export default router;