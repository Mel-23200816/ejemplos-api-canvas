function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  // Limpia todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULO RELLENO
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO
  // =============================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // CARITA CON arc()
  // =============================
  ctx.beginPath();

  // Círculo externo
  ctx.arc(400, 100, 50, 0, Math.PI * 2, true);

  // Boca
  ctx.moveTo(435, 100);
  ctx.arc(400, 100, 35, 0, Math.PI, false);

  // Ojo izquierdo
  ctx.moveTo(390, 90);
  ctx.arc(385, 90, 5, 0, Math.PI * 2, true);

  // Ojo derecho
  ctx.moveTo(420, 90);
  ctx.arc(415, 90, 5, 0, Math.PI * 2, true);

  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.stroke();

  // =============================
  // LINEAS Y TRIÁNGULOS
  // =============================
  
  // Triángulo relleno
  ctx.beginPath();
  ctx.moveTo(525, 25);
  ctx.lineTo(605, 25);
  ctx.lineTo(525, 105);
  ctx.fillStyle = "#3b82f6"; // Azul
  ctx.fill();

  // Triángulo contorneado
  ctx.beginPath();
  ctx.moveTo(625, 125);
  ctx.lineTo(625, 45);
  ctx.lineTo(545, 125);
  ctx.closePath();
  ctx.strokeStyle = "#ef4444"; // Rojo
  ctx.stroke();

  // =============================
  // ARCOS
  // =============================
  const offsetX = 700; // Desplazamos a la derecha para no solapar
  const offsetY = 25;  // Altura inicial

  ctx.strokeStyle = "#8b5cf6"; // Morado para los bordes
  ctx.fillStyle = "#ec4899";   // Rosa para los rellenos
  ctx.lineWidth = 2;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = offsetX + j * 50; // Coordenada x desplazada
      const y = offsetY + i * 50; // Coordenada y
      const radius = 20; // Radio del Arco
      const startAngle = 0; // Punto inicial del Círculo
      const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
      const counterclockwise = i % 2 !== 0; // Dirección alterna por fila

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();   // Las filas de abajo se rellenan
      } else {
        ctx.stroke(); // Las filas de arriba solo tienen contorno
      }
    }
  }

  // =============================
  // CURVAS CUADRÁTICAS DE BÉZIER
  // =============================
  
  // Guardamos el estado actual del canvas antes de mover el centro
  ctx.save(); 
  
  // Trasladamos el eje (0,0) 200 píxeles hacia abajo para que quede en la segunda "fila"
  ctx.translate(0, 200); 

  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  
  ctx.strokeStyle = "#10b981"; // Color verde Bootstrap
  ctx.lineWidth = 3;
  ctx.stroke();

  // Restauramos el eje a su posición original por si quieres dibujar más cosas después
  ctx.restore();

  // =============================
  // CURVAS CÚBICAS DE BÉZIER
  // =============================
  ctx.save();
  ctx.translate(150, 200); // Fila inferior, al lado de la burbuja

  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  
  ctx.fillStyle = "#8244C0"; // Morado intenso
  ctx.fill();

  ctx.restore();
}

function initUI() {
  document.getElementById("year").textContent = new Date().getFullYear();

  const btnRedraw = document.getElementById("btnRedraw");
  if (btnRedraw) {
      btnRedraw.addEventListener("click", draw);
  }

  window.addEventListener("resize", draw);

  draw();
}

initUI();