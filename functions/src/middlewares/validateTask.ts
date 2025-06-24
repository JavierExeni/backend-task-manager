import { body } from "express-validator";

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 200;

export const validateTask = [
  body("title")
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isString()
    .withMessage("El título debe ser un texto")
    .isLength({ max: MAX_TITLE_LENGTH })
    .withMessage(
      `El título no puede exceder los ${MAX_TITLE_LENGTH} caracteres`
    ),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser un texto")
    .isLength({ max: MAX_DESCRIPTION_LENGTH })
    .withMessage(
      `La descripción no puede exceder los ${MAX_DESCRIPTION_LENGTH} caracteres`
    ),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("El campo completed debe ser booleano"),

  body("userId")
    .notEmpty()
    .withMessage("El ID de usuario es obligatorio")
    .isString()
    .withMessage("El ID de usuario debe ser un texto"),
];
