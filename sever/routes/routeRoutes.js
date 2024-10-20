const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController.js');

router.get('/', routeController.getAllRoute);
router.get('/:dessertType', routeController.getRouteByDessertType);


module.exports = router;