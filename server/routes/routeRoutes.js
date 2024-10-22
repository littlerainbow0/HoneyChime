import express from 'express';
import * as routeController from '../controllers/routeController.js';  // 引入控制器層


const router = express.Router();

router.get('/getRoutes', routeController.getAllRoute);
router.get('/getRoutes/:dessertType', routeController.getRouteByDessertType);

router.get('/getStops', routeController.getAllStops);

router.post('/postRoute', routeController.postRoute);

router.put('/updateRoute/:routeID', routeController.updateRoute);

export default router;