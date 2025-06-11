import { Request, Response } from 'express';
import { findUserByEmail, createUser } from '../services/user.service';

export const getUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  const user = await findUserByEmail(email);
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

export const registerUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await createUser(email);
  res.status(201).json(user);
};