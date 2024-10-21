const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const frontPageRoutes = require('./frontPageRoutes');
const routeRoutes = require('./routeRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const templateRoutes = require('./templateRoutes');
const mealRoutes = require('./mealRoutes');
const seatRoutes = require('./seatRoutes');
const priceRoutes = require('./priceRoutes');
const orderRoutes = require('./orderRoutes');



//各個路由
router.use('/', frontPageRoutes);
router.use('/', mealRoutes);
router.use('/', userRoutes);
router.use('/getRoutes', routeRoutes);
router.use('/', scheduleRoutes);
router.use('/', templateRoutes);
router.use('/getSeats', seatRoutes);
router.use('/getPrice', priceRoutes);
router.use('/', orderRoutes);


module.exports = router;
