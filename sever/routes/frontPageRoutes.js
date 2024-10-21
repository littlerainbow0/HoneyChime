const express = require('express');
const router = express.Router();
const frontPageController = require('../controllers/frontPageController.js');

router.get('/getNews', frontPageController.getAllNews);
router.get('/getCards', frontPageController.getAllCards);
router.post('/postNews', frontPageController.postNews);
router.post('/postCards', frontPageController.postCards);

router.put('/updateNews/:newsID', frontPageController.updateNews);
router.put('/updateCards/:cardsID', frontPageController.updateCards);

module.exports = router;