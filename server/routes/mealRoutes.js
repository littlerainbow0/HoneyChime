const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController.js');

router.get('/getMeals/:dessertType', mealController.getMealsByDessertType);
router.get('/getMenu/:orderID', mealController.getMenuByOrderID);
router.get('/getDessertType', mealController.getAllDessertType);


module.exports = router;