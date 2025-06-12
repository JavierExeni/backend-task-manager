import { body } from "express-validator";

export const validateTask = [
  body("title")
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isString()
    .withMessage("El título debe ser un texto"),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser un texto"),

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
