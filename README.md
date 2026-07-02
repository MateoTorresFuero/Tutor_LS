# TUTOR DE LENGUA DE SEÑAS 

## Curso: Computación Gráfica (CC431-A)

## Docente: Montalvo Garcia Peter Jonathan

## Integrantes

- Pineda Garcia Diego Ronaldo
- Torres Fuero Mateo Lorenzo
- Trujillo Serva Luis Andre

## Descripción

Este proyecto consiste en un **Tutor Interactivo de Lengua de Señas** en tiempo real para el aprendizaje del abecedario dactilológico de la Lengua de Señas Americana (ASL). 

La aplicación utiliza la cámara web del usuario y un modelo de inteligencia artificial para clasificar las señas de forma instantánea. La arquitectura del sistema se divide en:
- **Frontend (React + Vite):** Captura el video, utiliza **MediaPipe Hands** en el navegador para extraer 21 puntos clave de la mano (63 coordenadas 3D). Envía estos landmarks numéricos al backend por WebSocket.
- **Backend (FastAPI):** Recibe las coordenadas por WebSocket, realiza la validación de los datos y ejecuta la inferencia utilizando un modelo de clasificación **Perceptrón Multicapa (MLP)** entrenado en TensorFlow/Keras, retornando la letra predicha.

La aplicación consta de dos secciones principales:
1. **Modo Aprendizaje:** El usuario selecciona libremente cualquier letra del abecedario. Se muestra una guía gráfica de referencia sobre cómo realizar la seña y el tutor indica en tiempo real si la postura frente a la cámara es correcta junto a su porcentaje de precisión.
2. **Modo Retos:** El sistema propone palabras al azar para deletrear letra por letra. Incorpora un mecanismo de **retención** de 15 frames consecutivos para asegurar que la postura sea estable antes de validar cada letra y avanzar, evitando saltos accidentales.

---

## Ejecución

Para iniciar la aplicación localmente, sigue los siguientes pasos:

### 1. Iniciar el Servidor Backend (FastAPI)

El backend requiere tener instalado **uv** para la gestión de dependencias y el entorno virtual de Python.

Desde la carpeta raíz del proyecto (`Tutor_LS/`), ejecuta:
```bash
uv sync
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

#### Verificar Pruebas Unitarias del Servidor
Para correr las pruebas automatizadas del WebSocket y el modelo:
```bash
uv run pytest tests/
```

### 2. Iniciar el Servidor Frontend (React)

El frontend requiere tener instalado **Node.js** y **npm**.

En una nueva terminal, navega a la carpeta del frontend e instala las dependencias de Node:
```bash
cd frontend
npm install
npm run dev
```

Una vez iniciados ambos servicios, abre tu navegador e ingresa a `http://localhost:5173`.
