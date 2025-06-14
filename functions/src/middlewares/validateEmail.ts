import { body } from 'express-validator';

export const validateEmail = [
  body('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('El formato del email no es válido')
];