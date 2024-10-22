import express from 'express';

import userRoutes from './userRoutes.js';
import frontPageRoutes from './frontPageRoutes.js';
import routeRoutes from './routeRoutes.js';
import scheduleRoutes from './scheduleRoutes.js';
import templateRoutes from './templateRoutes.js';
import mealRoutes from './mealRoutes.js';
import seatRoutes from './seatRoutes.js';
import priceRoutes from './priceRoutes.js';
import orderRoutes from './orderRoutes.js';

const router = express.Router();

// 各個路由
router.use('/', frontPageRoutes);
router.use('/', mealRoutes);
router.use('/', userRoutes);
router.use('/', routeRoutes);
router.use('/', scheduleRoutes);
router.use('/', templateRoutes);
router.use('/getSeats', seatRoutes);
router.use('/getPrice', priceRoutes);
router.use('/', orderRoutes);

export default router;