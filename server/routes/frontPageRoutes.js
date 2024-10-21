import express from 'express';
import * as frontPageController from '../controllers/frontPageController.js';  // 引入控制器層


const router = express.Router();

router.get('/getNews', frontPageController.getAllNews);
router.get('/getCards', frontPageController.getAllCards);
router.post('/postNews', frontPageController.postNews);
router.post('/postCards', frontPageController.postCards);

router.put('/updateNews/:newsID', frontPageController.updateNews);
router.put('/updateCards/:cardsID', frontPageController.updateCards);

export default router;