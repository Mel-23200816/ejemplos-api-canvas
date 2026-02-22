# 🎨 Renderizado de Primitivas 2D con HTML5 Canvas

![Badge HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este proyecto es una demostración interactiva y visual de las capacidades de la **API Canvas 2D de HTML5**. A través de un único lienzo (`<canvas>`), se renderizan múltiples figuras geométricas, trazados matemáticos complejos y escenas compuestas utilizando JavaScript puro.

El diseño de la interfaz está construido con **Bootstrap 5**, implementando un diseño moderno tipo *Glassmorphism* (efecto cristal) estructurado en un layout de altura completa (`vh-100`) para evitar el scroll y mantener el lienzo siempre centrado en pantalla.

## 🚀 Características y Técnicas Implementadas

A lo largo del código JavaScript (`main.js`), se aplican diversos métodos del `CanvasRenderingContext2D`:

* **Primitivas Básicas:** Uso de `fillRect()`, `clearRect()` y `strokeRect()` para la composición de formas con relleno y contorno.
* **Trazados y Rutas (Paths):** Creación de polígonos (triángulos) controlando el lápiz virtual con `beginPath()`, `moveTo()`, `lineTo()`, `fill()` y `stroke()`.
* **Arcos y Círculos:** Renderizado dinámico de cuadrículas de arcos matemáticos manipulando radianes (`Math.PI`) y direcciones usando el método `arc()`.
* **Curvas de Bézier:**
  * **Cuadráticas:** Uso de `quadraticCurveTo()` para dibujar una burbuja de diálogo.
  * **Cúbicas:** Uso de `bezierCurveTo()` con múltiples puntos de control para dibujar formas orgánicas complejas como un corazón.
* **Manipulación Espacial:** Uso de `ctx.translate()`, `ctx.save()` y `ctx.restore()` para mover el punto de origen del lienzo temporalmente y dibujar figuras en distintas posiciones sin recalcular coordenadas matemáticas.
* **Escenas Compuestas:** Integración de métodos como `arcTo()` para crear rectángulos con bordes redondeados, construyendo una escena clásica del videojuego Pac-Man.
* **Objetos Path2D:** Instanciación de formas modernas mediante `new Path2D()`, incluyendo el renderizado directo a partir de **datos de trazado SVG** (`"M10 10 h 80 v 80 h -80 Z"`).
* **Lienzo Responsivo:** Escalamiento dinámico del lienzo basado en eventos de redimensionamiento de ventana (`window.addEventListener("resize")`).

## 🛠️ Tecnologías Utilizadas

* **HTML5** (Semántica y elemento `<canvas>`)
* **JavaScript (ES6)** (Lógica de renderizado gráfico)
* **CSS3 & Bootstrap 5** (Estilos, Flexbox, UI/UX moderno)

## 💻 Instalación y Uso

Este proyecto no requiere dependencias de Node.js ni procesos de compilación. Para ejecutarlo:

1. Clona o descarga este repositorio en tu máquina local.
2. Asegúrate de tener la siguiente estructura básica de archivos:
   ```text
   📂 proyecto-canvas
   ┣ 📜 index.html
   ┗ 📂 assests
     ┗ 📂 js
       ┗ 📜 main.js

## ✒️ Autor

**Miguel Angel Cano Alejandro**