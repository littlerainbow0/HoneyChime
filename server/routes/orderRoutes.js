import express from 'express';
import * as orderControllers from '../controllers/orderControllers.js';  // 引入控制器層


const router = express.Router();

router.get('/getOrders', orderControllers.getAllOrders);
router.get('/getOrders/:userID', orderControllers.getOrderByUserID);

router.post('/postOrder', orderControllers.postOrder);

router.put('/updateUserOrder/:orderID', orderControllers.updateUserOrder);

export default router;