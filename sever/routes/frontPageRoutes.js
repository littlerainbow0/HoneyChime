
const express = require('express');
const router = express.Router();
const frontPageController = require('../controllers/frontPageController.js');

router.get('/getNews', frontPageController.getAllNews);
router.get('/getCards', frontPageController.getAllCards);
router.post('/postNews', frontPageController.postNews);
router.post('/postCards', frontPageController.postCards);

module.exports = router;