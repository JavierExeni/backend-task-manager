import db from '../firebase';
import { Task } from '../models/task.model';

const tasksCollection = db.collection('tasks');

export const getTasksByUser = async (userId: string) => {
  const snapshot = await tasksCollection.where('userId', '==', userId).orderBy('createdAt').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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