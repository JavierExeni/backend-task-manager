import { Request, Response } from 'express';
import * as TaskService from '../services/task.service';

export const getTasks = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const tasks = await TaskService.getTasksByUser(userId);
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const newTask = await TaskService.createTask(req.body);
  res.status(201).json(newTask);
};

export const editTask = async (req: Request, res: Response) => {
  await TaskService.updateTask(req.params.id, req.body);
  res.sendStatus(204);
};

export const removeTask = async (req: Request, res: Response) => {
  await TaskService.deleteTask(req.params.id);
  res.sendStatus(204);
};