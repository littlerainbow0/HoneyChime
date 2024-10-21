const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/getUsers', userController.getAllUsers);
router.get('/getUsers/:userID', userController.getUserByUserID);

router.post('/signIn', userController.signIn);

router.put('/updateUserInfo/:userID', userController.updateUserInfo);
router.put('/updateUserLogInTime/:userID', userController.updateUserLogInTime);

module.exports = router;