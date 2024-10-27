import express from 'express';
import * as routeController from '../controllers/routeController.js';  // 引入控制器層
import * as authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/getRoutes', routeController.getAllRoute);
router.get('/getRoutes/:dessertType', routeController.getRouteByDessertType);
router.get('/getStops', routeController.getAllStops);

router.post('/postRoute', authMiddleware.isAdmin, routeController.postRoute);

router.put('/updateRoute/:routeID', authMiddleware.isAdmin, routeController.updateRoute);

export default router;