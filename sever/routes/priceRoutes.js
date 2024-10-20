const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController.js');

router.get('/:carriageType', priceController.getPriceByCarriageType);

module.exports = router;