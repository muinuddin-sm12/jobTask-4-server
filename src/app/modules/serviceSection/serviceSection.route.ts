import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ServiceSectionController } from './serviceSection.controller';

const router  = express.Router();
router.post('/create-service', ServiceSectionController.createService);
router.patch('/:id', ServiceSectionController.updateService);
router.get('/', ServiceSectionController.getServices);

export const ServiceSectionRoutes = router;