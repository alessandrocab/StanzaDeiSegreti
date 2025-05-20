const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハヒフヘホマミムメモヤユヨラリルレロワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * canvas.height;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // pulisce tutto ad ogni frame

  ctx.fillStyle = "rgba(0, 255, 0, 0.7)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reset goccia casualmente per effetto dinamico
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    } else {
      drops[i] += 0.5; // controlla la velocità (più basso = più lento)
    }
  }
}

setInterval(draw, 60);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
