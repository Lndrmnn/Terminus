# 🧙‍♂️ Terminus - Aventura Educativa en la Línea de Comandos (CLI Linux/UNIX)

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20CLI-brightgreen.svg)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20HTML5-yellow.svg)](#)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](#)

> **Terminus** es una plataforma y videojuego educativo en entorno de terminal web interactiva (*CLI*), diseñado para enseñar de forma práctica, inmersiva y lúdica los conceptos esenciales y comandos de navegación de sistemas operativos tipo **UNIX / Linux**.

## 🌐 Demo en Vivo y Repositorio
* **Jugar en línea:** [https://terminus.mdmnextdata.cl](https://terminus.mdmnextdata.cl)
* **Código Fuente:** [https://github.com/Lndrmnn/Terminus](https://github.com/Lndrmnn/Terminus)

---

## 📖 Descripción del Fork Educativo

Este proyecto constituye una adaptación, refactorización y localización al **español** de la obra original de diseño educativo creada en el **MIT** (*Massachusetts Institute of Technology*).

### 🎯 Propósito Pedagógico
Aprender la terminal de comandos suele ser una barrera de entrada para estudiantes de informática, desarrollo de software y administración de sistemas. **Terminus** transforma el sistema de archivos tradicional en un mundo de aventuras RPG donde:
* Los **directorios** son salas, castillos, bosques y mazmorras navegables (`cd`, `pwd`).
* Los **archivos** son pergaminos, cartas, personajes y herramientas (`cat`, `less`).
* Los **comandos de sistema** actúan como hechizos mágicos con sintaxis real (`mv`, `rm`, `touch`, `cp`, `mkdir`, `grep`, `sudo`).

---

## 🛠️ Tecnologías y Arquitectura

* **Frontend / Emulación:** [jQuery Terminal Emulator](https://terminal.jcubic.pl/) (v0.6.3) sobre JavaScript Vanilla y jQuery 1.9.1.
* **Presentación:** HTML5 semántico con metadatos optimizados para **Open Graph (LinkedIn / Redes Sociales)** y CSS3 Pixel-Art.
* **Motor del Juego:** Máquina de estados desacoplada en cliente (`GameState.js`, `Room.js`, `Item.js`, `EventTarget.js`) con soporte de persistencia mediante cookies de sesión y autocompletado inteligente con tecla `Tab`.
* **Compatibilidad:** 100% autónomo (Zero-dependency runtime), ejecutable en cualquier navegador web moderno tanto en modo local (`file://`) como bajo servidores HTTP (Nginx, Apache, Python, Docker).

---

## 🎮 Referencia de Comandos y Hechizos

| Comando / Hechizo | Sintaxis de Ejemplo | Descripción Didáctica |
| :--- | :--- | :--- |
| `ls` | `ls` o `ls UBICACION` | **Listar:** Muestra los caminos, salas adyacentes y objetos presentes en la ubicación actual. |
| `cd` | `cd WesternForest` | **Cambiar Directorio:** Mueve al aventurero a una nueva sala o camino adyacente. |
| `cd ..` | `cd ..` | **Directorio Padre:** Retrocede a la habitación o nivel anterior. |
| `cd ~` | `cd ~` o `cd` | **Directorio Home:** Regresa inmediatamente al hogar del aventurero (`Home`). |
| `pwd` | `pwd` | **Ruta Actual:** Imprime la ubicación actual en el mapa/jerarquía del sistema. |
| `less` / `cat` | `less WelcomeLetter` | **Visualizar/Examinar:** Lee el contenido de cartas, libros, pergaminos o habla con personajes. |
| `man` | `man cd` | **Manual de Ayuda:** Consulta las instrucciones detalladas y sintaxis de un comando específico. |
| `mv` | `mv Boulder SmallHole` | **Mover Objeto:** Traslada un objeto a otra ubicación para resolver obstáculos o acertijos. |
| `rm` | `rm ThornyBrambles` | **Eliminar:** Desvanece y remueve objetos u obstáculos permitidos del mundo. |
| `touch` | `touch Plank` | **Crear Archivo/Objeto:** Materializa un nuevo objeto en la sala actual mediante el toque artesano. |
| `cp` | `cp EarOfCorn AnotherEarOfCorn` | **Copiar:** Duplica un elemento existente asignándole un nuevo identificador. |
| `mkdir` | `mkdir House` | **Crear Directorio:** Construye una nueva sala o espacio en el mapa del juego. |
| `grep` | `grep peppers PracticeBook` | **Buscar Patrón:** Escanea y filtra líneas de texto que coincidan con una palabra clave. |
| `sudo` | `sudo less Certificate` | **Superusuario:** Ejecuta comandos de máxima autoridad mediante autenticación por clave. |
| `help` | `help` | Muestra la orientación básica inicial de la terminal. |
| `exit` | `exit` | Cierra la sesión del juego. |

---

## 🚀 Instalación y Ejecución en Local

### Opción 1: Ejecución Directa (Sin dependencias)
1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/Lndrmnn/Terminus.git
   cd Terminus
   ```
2. **En Windows:** Haz doble clic en `iniciar_terminus.bat` o abre `index.html` en tu navegador.
3. **En Linux / macOS:** Ejecuta `./iniciar_terminus.sh` o abre `index.html` directamente en tu navegador preferido.

### Opción 2: Servidor Web Local con Python
```bash
python3 -m http.server 8000
```
Luego accede a `http://localhost:8000` en tu navegador web.

---

## 📁 Estructura del Repositorio

```text
Terminus/
├── index.html            # Punto de entrada principal con etiquetas Open Graph
├── main.html             # Réplica de compatibilidad para rutas legadas
├── iniciar_terminus.bat  # Lanzador automatizado para entornos Windows
├── iniciar_terminus.sh   # Lanzador automatizado para entornos Linux/macOS
├── LICENSE               # Licencia oficial GNU General Public License v2.0
├── README.md             # Documentación técnica y pedagógica del proyecto
├── static/               # Activos y lógica del cliente
│   ├── css/              # Hojas de estilo de la terminal (jquery.terminal, terminus.css)
│   ├── img/              # 78 ilustraciones y recursos gráficos pixel-art originales
│   └── javascript/       # Lógica del motor, clases de entidad y scripts de eventos
├── docs/                 # Documentos de investigación y diseño original del MIT (PDFs)
└── Java/                 # Prototipo inicial del juego desarrollado en Java
```

---

## 👥 Créditos y Reconocimientos

* **Autores Originales (MIT CMS.590 / Educational Games):**  
  * Shawn Conrad  
  * Michele Pratusevich  
  * Michaela LaVan  
  * Emma Tolley  
  * David Zhou  
* **Adaptación, Localización y Mantenimiento:**  
  * **José Cifuentes Lindermann** (2026)

---

## 📜 Licencia

Este proyecto es software libre y se distribuye bajo los términos de la GNU General Public License v2.0 (GPLv2). Para más detalles, consulta el archivo [LICENSE](LICENSE).

```text
Copyright (C) 2026 José Cifuentes Lindermann
Este programa es software libre; puede redistribuirlo y/o modificarlo bajo los términos de la Licencia Pública General de GNU versión 2 publicada por la Free Software Foundation.
```
