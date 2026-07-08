# Arquitectura del Sistema - Farenheit Invisible

## 1. Diagrama de Alto Nivel
La aplicación sigue una arquitectura cliente-servidor moderna:


[Image of cloud based server architecture diagram]


## 2. Componentes
- **Frontend (Mobile):** React Native (TypeScript).
- **Backend (API):** Node.js con Express/NestJS (TypeScript).
- **Base de Datos:** PostgreSQL (Relacional para consistencia financiera).
- **Caché:** Redis (Para optimizar el motor de alertas).
- **Infraestructura:** Docker containers orquestados.

## 3. Principios de Diseño
- **Zero Trust:** Toda petición a la API debe estar autenticada.
- **Asincronía:** El sistema de notificaciones corre en segundo plano (worker services).
- **Modularidad:** Separación estricta entre lógica de negocio, acceso a datos y UI.