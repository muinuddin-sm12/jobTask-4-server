import express from 'express';
import { multerUpload } from '../../config/multer.config';
import validateRequest from '../../middleware/validateRequest';
import { UserValidations } from '../user/user.validation';
import { AuthControllers } from './auth.controller';
import { parseBody } from '../../middleware/bodyParser';
import { AuthValidations } from './auth.validation';

const router = express.Router();

router.post('/register', multerUpload.single('image'), parseBody, validateRequest(UserValidations.createUserValidationSchema), AuthControllers.register)
router.post('/login', validateRequest(AuthValidations.loginValidationSchema), AuthControllers.loginUser)

export const AuthRoutes = router;