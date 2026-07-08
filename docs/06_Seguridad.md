# Protocolos de Seguridad

## 1. Capas de Protección
- **Transporte:** TLS 1.3 (HTTPS obligatorio en todas las peticiones).
- **Autenticación:** JWT con refresh tokens para sesiones seguras.
- **Datos Sensibles:** Cifrado AES-256 en reposo para datos financieros críticos.
- **Auditoría:** Logging de todas las acciones de modificación de registros financieros.

## 2. Estrategia
Diseño orientado a **Zero Trust**: ninguna petición es confiable por defecto. Se validan permisos en cada endpoint de la API.
