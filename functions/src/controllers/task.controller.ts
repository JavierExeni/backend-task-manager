import { Request, Response } from "express";
import * as TaskService from "../services/task.service";
import { findUserById } from "../services/user.service";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { title, completed } = req.query;

    // Validación básica del userId
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    // Construcción del filtro
    const filter: {
      userId: string;
      title?: string;
      completed?: boolean;
    } = { userId };

    // Parseo de parámetros
    if (title && typeof title === "string") {
      filter.title = title;
    }

    if (completed === "true" || completed === "false") {
      filter.completed = completed === "true";
    }

    const tasks = await TaskService.getTasksByUser(filter);
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
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
    res.status(404).json({
      errors: [{ field: "id", message: "La tarea no existe" }],
    });
    return;
  }

  await TaskService.updateTask(req.params.id, req.body);
  res.sendStatus(204);
};

export const removeTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;

  const exists = await TaskService.findTaskById(taskId);
  if (!exists) {
    res.status(404).json({
      errors: [{ field: "id", message: "La tarea no existe" }],
    });
    return;
  }
  await TaskService.deleteTask(req.params.id);
  res.sendStatus(204);
};
