---
title: Requerimientos
---

# 4. Requerimientos Técnicos

## 4.1 Requerimientos INRIA para Gaussian Splatting

### 4.1.1 Requerimientos de Hardware

* **GPU compatible con CUDA** y **Compute Capability 7.0+**
* **24 GB de VRAM** (para entrenar con calidad equivalente a la evaluación del paper).
  *(Consultar las FAQ para configuraciones con menor VRAM).*

### 4.1.2 Requerimientos de Software

* **Conda** (recomendado para una instalación sencilla)
* **Compilador C++** compatible con extensiones de PyTorch

  * *(El equipo INRIA utilizó Visual Studio 2019 en Windows)*
* **CUDA SDK 11** para extensiones de PyTorch (instalar después de Visual Studio)

  * *Se utilizó CUDA 11.8; existen problemas conocidos con 11.6.*
* El **compilador C++** y el **CUDA SDK** deben ser compatibles entre sí.

---

## 4.2 Requerimientos para SIBR

El visualizador **SIBR** se utilizará para comparar la calidad obtenida entre las distintas imágenes procesadas por cada implementación.

### 4.2.1 Requerimientos de Hardware

* **GPU compatible con OpenGL 4.5** y controladores actualizados

  * *(o MESA en su versión más reciente)*
* **4 GB de VRAM** (recomendado)
* **GPU compatible con CUDA** y **Compute Capability 7.0+**

  * *(solo necesario para el visor en tiempo real / Real-Time Viewer)*


