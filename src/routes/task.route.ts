import express from 'express';
import { getTasks, addTask, editTask, removeTask } from '../controllers/task.controller';

const router = express.Router();

router.get('/:userId', getTasks);
router.post('/', addTask);
router.put('/:id', editTask);
router.delete('/:id', removeTask);

export default router;