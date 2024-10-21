import express from 'express';
import * as userController from '../controllers/userController.js';  // 引入控制器層

const router = express.Router();

router.get('/getUsers', userController.getAllUsers);
router.get('/getUsers/:userID', userController.getUserByUserID);

router.post('/signIn', userController.signIn);

router.put('/updateUserInfo/:userID', userController.updateUserInfo);
router.put('/updateUserLogInTime/:userID', userController.updateUserLogInTime);

export default router;