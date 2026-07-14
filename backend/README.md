# Farenheit Invisible - Backend API

Autor:

Kike

Backend principal de la aplicación **Farenheit Invisible**, orientada a la gestión de transporte y administración de activos.

---

## Estado del proyecto

Sprint actual:

**Sprint 1 - Backend Foundation**

Estado:

✅ Backend funcional  
✅ API Express configurada  
✅ PostgreSQL conectado  
✅ Variables de entorno configuradas  
✅ Middleware de errores implementado  
✅ Health check operativo  

---

## Stack tecnológico

- Node.js
- TypeScript
- Express
- PostgreSQL
- JWT
- bcrypt
- Helmet
- Morgan
- dotenv

---

## Estructura del proyecto

```text
src
├── config
├── controllers
├── database
├── dto
├── entities
├── interfaces
├── middleware
├── repositories
├── routes
├── services
├── types
├── utils
├── app.ts
└── server.ts

Markdown

- Instalación
  npm install
- Variables de entorno
  .env
- Scripts
  npm run dev
- Endpoint `/health`
  GET /health
- Base de datos
  PostgreSQL
- Principios del proyecto
  Diseño antes de programaciòn.
  Arquitectura modular.
  Cambios controlados por sprint.
  Seguridad y mantenimiento como prioridades

- Próximo Sprint
  Sprint 2 -Mòdulo de Vehìculos
   Objetivos:
    Entidad Vehìculo.
    Modelo de datos.
    Servicios.
    Controladores.
    Rutas REST.
    Operaciones CRUD.

