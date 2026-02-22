// Función auxiliar para esquinas redondeadas
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth * 0.8; // Ampliado un poco para que quepa todo mejor
  canvas.height = window.innerHeight * 0.6;
}

function draw() {
  const canvas = document.getElementById("canvas");

  if (!canvas.getContext) return;

  resizeCanvas(canvas);

  const ctx = canvas.getContext("2d");

  // Limpia todo el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULOS
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO SIMPLE
  // =============================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // CARITA SONRIENTE
  // =============================
  ctx.beginPath();
  ctx.arc(400, 100, 50, 0, Math.PI * 2, true); 
  ctx.moveTo(435, 100);
  ctx.arc(400, 100, 35, 0, Math.PI, false); 
  ctx.moveTo(390, 90);
  ctx.arc(385, 90, 5, 0, Math.PI * 2, true); 
  ctx.moveTo(420, 90);
  ctx.arc(415, 90, 5, 0, Math.PI * 2, true); 
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.stroke();

  // =============================
  // LÍNEAS
  // =============================
  ctx.beginPath();
  ctx.moveTo(525, 25);
  ctx.lineTo(605, 25);
  ctx.lineTo(525, 105);
  ctx.fillStyle = "#3b82f6";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(625, 125);
  ctx.lineTo(625, 45);
  ctx.lineTo(545, 125);
  ctx.closePath();
  ctx.strokeStyle = "#ef4444";
  ctx.stroke();

  // =============================
  // ARCOS
  // =============================
  const offsetX = 700; 
  const offsetY = 25;  

  ctx.strokeStyle = "#8b5cf6"; 
  ctx.fillStyle = "#ec4899";   
  ctx.lineWidth = 2;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = offsetX + j * 50; 
      const y = offsetY + i * 50; 
      const radius = 20; 
      const startAngle = 0; 
      const endAngle = Math.PI + (Math.PI * j) / 2; 
      const counterclockwise = i % 2 !== 0; 

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();   
      } else {
        ctx.stroke(); 
      }
    }
  }

  // =============================
  // CURVAS DE BEZIER Y CUADRATICAS
  // =============================
  ctx.save(); 
  ctx.translate(0, 200); 

  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  
  ctx.strokeStyle = "#10b981"; 
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.restore(); 

  // =============================
  // CURVAS CUBICAS DE BEZIER
  // =============================
  ctx.save();
  ctx.translate(150, 200); 

  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  
  ctx.fillStyle = "#8244C0"; 
  ctx.fill();

  ctx.restore();

  // =============================
  // COMBINACIONES
  // =============================
  ctx.save();
  ctx.translate(350, 180); 

  ctx.strokeStyle = "#0dcaf0"; 
  ctx.lineWidth = 2;
  
  roundedRect(ctx, 12, 12, 150, 150, 15);
  roundedRect(ctx, 19, 19, 150, 150, 9);
  roundedRect(ctx, 53, 53, 49, 33, 10);
  roundedRect(ctx, 53, 119, 49, 16, 6);
  roundedRect(ctx, 135, 53, 49, 33, 10);
  roundedRect(ctx, 135, 119, 25, 49, 10);

  ctx.fillStyle = "#ffc107"; 
  ctx.beginPath();
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill();

  ctx.fillStyle = "black"; // Color para los puntos
  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
  }
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }
  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  ctx.fillStyle = "#dc3545"; 
  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.restore();

  // =============================
  // OBJETOS Path2D
  // =============================

  ctx.save();
  ctx.translate(600, 200); // Lo movemos a la derecha del Pac-Man

  const rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  const circle = new Path2D();
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  // 2. Nuevo Path2D a partir de datos SVG
  const p = new Path2D("M10 10 h 80 v 80 h -80 Z");

  // Dibujamos las formas
  ctx.strokeStyle = "#d946ef"; // Rosa fucsia
  ctx.lineWidth = 3;
  ctx.stroke(rectangle);

  ctx.fillStyle = "#facc15"; // Amarillo
  ctx.fill(circle);

  // Desplazamos un poco para dibujar la figura SVG sin tapar el círculo
  ctx.save();
  ctx.translate(140, 0); 
  ctx.fillStyle = "#0dcaf0"; // Cyan
  ctx.fill(p);
  ctx.restore();

  ctx.restore();
}

function initUI() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }

  const btnRedraw = document.getElementById("btnRedraw");
  if (btnRedraw) {
      btnRedraw.addEventListener("click", draw);
  }

  window.addEventListener("resize", draw);

  draw();
}

initUI();

// Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}