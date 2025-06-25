import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ContactValidations } from './contact.validation';
import { ContactControllers } from './contact.controller';

const router = express.Router();

router.post('/create-contact', validateRequest(ContactValidations.createContactValidationSchema), ContactControllers.createContact);
router.get('/', ContactControllers.getAllContact);

export const ContactRoutes = router;