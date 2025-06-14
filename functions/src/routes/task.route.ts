import express from 'express';

import { validateTask } from '../middlewares/validateTask';
import { handleValidation } from '../middlewares/handleValidation';
import { getTasks, addTask, editTask, removeTask } from '../controllers/task.controller';

const router = express.Router();

router.get('/:userId', getTasks);
router.post('/', validateTask, handleValidation, addTask);
router.put('/:id', editTask);
router.delete('/:id', removeTask);

export default router;