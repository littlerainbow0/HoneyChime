import express from 'express';
import * as setSessionMiddleware from '../middleware/setSessionMiddleware.js';
import * as authMiddleware from '../middleware/authMiddleware.js';
import * as userController from '../controllers/userController.js';  // 引入控制器層

const router = express.Router();

router.get('/getUsers', authMiddleware.isAdmin, userController.getAllUsers);
router.get('/getUsers/:userID', authMiddleware.isUser, userController.getUserByUserID);

router.post('/signIn', authMiddleware.logined, setSessionMiddleware.setSessionMaxAge, userController.signIn);
router.post('/LogIn', authMiddleware.logined, setSessionMiddleware.setSessionMaxAge, userController.logIn);
router.post('/logOut', authMiddleware.isUser, userController.logOut);

router.put('/updateUserInfo', setSessionMiddleware.setSessionMaxAge, userController.updateUserInfo);

export default router;