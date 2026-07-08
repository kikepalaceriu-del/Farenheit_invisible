# Especificación de Requisitos (SRS) - MVP

## 1. Módulos Funcionales
### 1.1 Control de Combustible
- Registro de carga (litros, costo, odómetro).
- Cálculo automático de rendimiento (km/l).

### 1.2 Control de Mantenimiento
- Registro de servicios realizados.
- Alertas predictivas basadas en kilometraje.

### 1.3 Calendario Legal
- Alertas de Verificación Vehicular.
- Renovación de Seguros.

### 1.4 Motor de Depreciación
- Cálculo automático basado en: Año, Modelo, Tipo de uso (público/privado) y Odómetro.
- Referencia de valores basada en tablas de mercado (Libro Azul).

### 1.5 Gestión de Alertas
- Sistema multicanal: Push, Email y SMS.
- Configuración de preferencias por usuario.

## 2. Requisitos No Funcionales
- **Moneda:** Operación exclusiva en MXN (fase 1).
- **Disponibilidad:** Funcionalidad offline (sincronización en background).
- **Seguridad:** Autenticación robusta y cifrado en reposo.