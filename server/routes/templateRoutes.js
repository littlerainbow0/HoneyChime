import express from 'express';
import * as templateController from '../controllers/templateController.js';  // 引入控制器層
import * as authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/getTemplates', templateController.getAllTemplate);
router.get('/getTemplates/:scheduleID', templateController.getTemplateByScheduleID);

router.post('/postTemplate', authMiddleware.isAdmin, templateController.postTemplate);

router.put('/updateTemplate/:templateID', authMiddleware.isAdmin, templateController.updateTemplate);

export default router;