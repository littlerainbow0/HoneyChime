import express from 'express';
import * as frontPageController from '../controllers/frontPageController.js';  // 引入控制器層
import * as authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/getNews', frontPageController.getAllNews);
router.get('/getCards', frontPageController.getAllCards);

router.post('/postNews', authMiddleware.isAdmin, frontPageController.postNews);
router.post('/postCards', authMiddleware.isAdmin, frontPageController.postCards);

router.put('/updateNews/:newsID', authMiddleware.isAdmin, frontPageController.updateNews);
router.put('/updateCards/:cardsID', authMiddleware.isAdmin, frontPageController.updateCards);

export default router;