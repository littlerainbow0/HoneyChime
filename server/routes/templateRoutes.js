import express from 'express';
import * as templateController from '../controllers/templateController.js';  // 引入控制器層


const router = express.Router();

router.get('/getTemplates', templateController.getAllTemplate);
router.get('/getTemplates/:scheduleID', templateController.getTemplateByScheduleID);

router.post('/postTemplate', templateController.postTemplate);

router.put('/updateTemplate/:templateID', templateController.updateTemplate);

export default router;