import express from 'express';
import * as routeController from '../controllers/routeController.js';  // 引入控制器層


const router = express.Router();

router.get('/', routeController.getAllRoute);
router.get('/:dessertType', routeController.getRouteByDessertType);

export default router;