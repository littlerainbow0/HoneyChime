import express from 'express';
import * as orderControllers from '../controllers/orderControllers.js';  // 引入控制器層
import * as authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/getOrders', orderControllers.getAllOrders);
router.get('/getOrders/:userID', authMiddleware.isUser, orderControllers.getOrderByUserID);

router.post('/postOrder', authMiddleware.isUser, orderControllers.postOrder);

router.put('/updateUserOrder/:orderID', authMiddleware.isUser, orderControllers.updateUserOrder);

export default router;