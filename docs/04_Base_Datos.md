# Esquema de Base de Datos

## 1. Entidades Principales
- **Users:** Gestión de identidades y preferencias.
- **Vehicles:** Configuración, especificaciones y estado actual.
- **Expenses:** Registro detallado de costos operativos.
- **Depreciation_Logs:** Registro histórico del valor del activo.
- **Notification_Tasks:** Cola de mensajes para servicios de mensajería.

## 2. Relaciones Críticas
- Un usuario puede tener múltiples vehículos.
- Cada vehículo mantiene una relación 1:N con gastos y mantenimientos.