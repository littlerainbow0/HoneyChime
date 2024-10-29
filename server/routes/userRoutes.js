import express from 'express';
import * as setSessionMiddleware from '../middleware/setSessionMiddleware.js';
import * as authMiddleware from '../middleware/authMiddleware.js';
import * as userController from '../controllers/userController.js';  // 引入控制器層

const router = express.Router();

router.get('/getUsers', userController.getAllUsers);
router.get('/getUsers/:userID', authMiddleware.isUser, userController.getUserByUserID);
router.get('/checkLogIn', authMiddleware.checkLogin);
router.get('/checkAdmin', authMiddleware.checkAdmin);

router.post('/signIn', authMiddleware.logined, setSessionMiddleware.setSessionMaxAge, userController.signIn);
router.post('/LogIn', authMiddleware.logined, setSessionMiddleware.setSessionMaxAge, userController.logIn);
router.post('/logOut', authMiddleware.isUser, userController.logOut);
router.post('/validate', userController.Validate);
router.post('/verifyCode', userController.VerifyCode);
router.post('/resendMail', userController.resendMail);

router.post('/updatePassword', userController.updateUserPassword);
router.put('/updateUserInfo', setSessionMiddleware.setSessionMaxAge, userController.updateUserInfo);

export default router;