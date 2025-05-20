const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハヒフヘホマミムメモヤユヨラリルレロワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

// Inizializza drops con numeri casuali tra -20 e 0 (più caratteri visibili per colonna)
const drops = Array(columns).fill().map(() => Math.random() * -20);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.015)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0, 255, 0, 0.03)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Riparti occasionalmente
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i] += 0.3; // Pioggia più lenta (0.3 invece di 1)
  }
}

setInterval(draw, 50); // intervallo più lento (50ms invece di 33)

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
