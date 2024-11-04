import express from 'express';
import * as questionController from '../controllers/questionController.js';  // 引入控制器層


const router = express.Router();

router.get('/getQAS', questionController.getQAS);

export default router;