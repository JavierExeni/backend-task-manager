import { Request, Response } from "express";
import * as TaskService from "../services/task.service";
import { findUserById } from "../services/user.service";

export const getTasks = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const tasks = await TaskService.getTasksByUser(userId);
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const exists = await findUserById(userId);
  if (!exists) {
    res.status(400).json({
      errors: [{ field: "userId", message: "El usuario no existe" }],
    });
    return;
  }

  const taskData = {
    ...req.body,
    completed: req.body.completed ?? false,
    createdAt: new Date().toISOString(),
  };

  const newTask = await TaskService.createTask(taskData);
  res.status(201).json(newTask);
};
export const editTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;

  const exists = await TaskService.findTaskById(taskId);
  if (!exists) {
    return res.status(404).json({
      errors: [{ field: "id", message: "La tarea no existe" }],
    });
  }

  await TaskService.updateTask(req.params.id, req.body);
  res.sendStatus(204);
};

export const removeTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;

  const exists = await TaskService.findTaskById(taskId);
  if (!exists) {
    return res.status(404).json({
      errors: [{ field: "id", message: "La tarea no existe" }],
    });
  }
  await TaskService.deleteTask(req.params.id);
  res.sendStatus(204);
};
