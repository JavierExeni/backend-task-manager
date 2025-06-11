import express from 'express';
import { getUser, registerUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/:email', getUser);
router.post('/', registerUser);

export default router;