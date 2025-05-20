const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハヒフヘホマミムメモヤユヨラリルレロワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(0);

function draw() {
  // Rimuovi l'effetto scia e rendi la pioggia "pulita"
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 199);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
