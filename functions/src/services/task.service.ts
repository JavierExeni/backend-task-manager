import db from "../firebase";
import { FilterTask, Task } from "../models/task.model";

const tasksCollection = db.collection("tasks");

export const getTasksByUser = async (filters: FilterTask) => {
  try {
    let query = db.collection("tasks").where("userId", "==", filters.userId);

    // Filtros que Firestore puede manejar
    if (filters.completed !== undefined) {
      query = query.where("completed", "==", filters.completed);
    }

    const snapshot = await query.get();
    let tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Task[];

    // Filtro por título en memoria (para búsqueda en cualquier posición)
    if (filters.title) {
      const searchTerm = filters.title.toLowerCase();
      tasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm)
      );
    }

    return tasks;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (task: Task) => {
  const docRef = await tasksCollection.add(task);
  return { id: docRef.id, ...task };
};

export const updateTask = async (id: string, updates: Partial<Task>) => {
  await tasksCollection.doc(id).update(updates);
};

export const deleteTask = async (id: string) => {
  await tasksCollection.doc(id).delete();
};

export const findTaskById = async (id: string): Promise<boolean> => {
  const doc = await tasksCollection.doc(id).get();
  return doc.exists;
};
