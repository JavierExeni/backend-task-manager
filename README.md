# 🚀 Backend Task Manager - Firebase Cloud Functions

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

Prueba técnica para la empresa ATOM en la cual se desarrollo una API REST para la aplicación de gestión de tareas, desarrollada con Firebase Cloud Functions, Express, TypeScript y Firestore.

## 🔗 Enlaces
- **Frontend**: [Repositorio Frontend](https://github.com/JavierExeni/frontend-task-manager)
- **Demo**: [https://task-manager-challenge.web.app](https://task-manager-challenge.web.app)

# 📡 API Endpoints Documentation

## 🔐 User Routes
`https://your-api-domain.com/api/users`

| Método | Endpoint          | Descripción                          | Middlewares Aplicados               |
|--------|-------------------|--------------------------------------|-------------------------------------|
| `GET`  | `/api/users/:email` | Obtiene un usuario por email         | -                                   |
| `POST` | `/api/users/`      | Registra un nuevo usuario            | `validateEmail`, `handleValidation` |

## 📝 Task Routes 
`https://your-api-domain.com/api/tasks`

## 📋 Available Endpoints

| Method | Endpoint                | Description                           | Middlewares Applied          |
|--------|-------------------------|---------------------------------------|------------------------------|
| GET    | `/:userId`              | Get all tasks for a user              | -                            |
| POST   | `/`                     | Create a new task                     | `validateTask`, `handleValidation` |
| PUT    | `/:id`                  | Update an existing task               | -                            |
| DELETE | `/:id`                  | Delete a task                         | -                            |

## 🏗️ Estructura del Proyecto

```bash
.
├── functions/
│   ├── src/
│   │   ├── controllers/    # Manejo de endpoints
│   │   ├── middlewares/    # Auth y validaciones
│   │   ├── models/         # Interfaces TS
│   │   ├── routes/         # Definición de rutas
│   │   ├── services/       # Lógica de negocio
│   │   ├── app.ts          # Config Express
│   │   ├── firebase.ts     # Inicialización Firebase
│   │   └── index.ts        # Punto de entrada
│   ├── .env.template       # Variables de entorno (plantilla)
│   ├── .firebaserc         # Config Firebase
│   ├── firebase.json       # Reglas despliegue
│   └── tsconfig.json       # Config TypeScript
├── .gitignore
└── package.json
```

## 🔧 Configuración Rápida

1. Copiar variables de entorno:

```bash
cp template.env .env
```
Editar .env con tus credenciales Firebase.

2. Instalar dependencias:

```bash
npm install
cd functions && npm install
```

3. Ejecutar localmente:

```bash
npm run serve
```

4. Desplegar a Firebase:

```bash
firebase deploy --only functions
```