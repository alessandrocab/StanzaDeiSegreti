const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハヒフヘホマミムメモヤユヨラリルレロワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array.from({ length: columns }, () => Math.random() * canvas.height);

function draw() {
  // ⚠️ Importante: non cancelliamo con colore pieno
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // effetto dissolvenza leggero
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    } else {
      drops[i] += 0.5;
    }
  }
}

setInterval(draw, 60);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
