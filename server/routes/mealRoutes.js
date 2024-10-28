import express from 'express';
import * as mealController from '../controllers/mealController.js';  // 引入控制器層


const router = express.Router();

router.get('/getMeals', mealController.getAllMeals);
router.get('/getMeals/:dessertType', mealController.getMealsByDessertType);
router.get('/getMenu/:orderID', mealController.getMenuByOrderID);
router.get('/getDessertType', mealController.getAllDessertType);

export default router;