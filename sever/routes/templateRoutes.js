const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController.js');

router.get('/getTemplates', templateController.getAllTemplate);
router.get('/getTemplates/:scheduleID', templateController.getTemplateByScheduleID);

router.post('/postTemplate', templateController.postTemplate);

router.put('/updateTemplate/:templateID', templateController.updateTemplate);

module.exports = router;