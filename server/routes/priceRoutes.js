import express from 'express';
import * as priceController from '../controllers/priceController.js';  // 引入控制器層


const router = express.Router();

router.get('/:carriageType', priceController.getPriceByCarriageType);

export default router;