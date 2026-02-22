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