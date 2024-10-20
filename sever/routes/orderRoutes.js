const express = require('express');
const router = express.Router();
const oderControllers = require('../controllers/oderControllers.js');

router.get('/getOrders', oderControllers.getAllOrders);
router.get('/getOrders/:userID', oderControllers.getOrderByUserID);

router.post('/postOrder', oderControllers.postOrder);

router.put('/updateUserOrder/:orderID', oderControllers.updateUserOrder);

module.exports = router;