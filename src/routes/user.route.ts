import express from 'express';
import { getUser, registerUser } from '../controllers/user.controller';
import { validateEmail } from '../middlewares/validateEmail';
import { handleValidation } from '../middlewares/handleValidation';

const router = express.Router();

router.get('/:email', getUser);
router.post('/', validateEmail, handleValidation, registerUser);

export default router;