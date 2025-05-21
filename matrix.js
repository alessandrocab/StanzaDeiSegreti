const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = 'アァイィウヴエカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const fontSize = 20;
const columnCount = Math.floor(canvas.width / fontSize);
const drops = Array(columnCount).fill(0);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];

    // Mostra un solo carattere per colonna, più separato verticalmente
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Maggiore salto tra i caratteri
    if (Math.random() > 0.95) {
      drops[i] = 0;
    } else {
      drops[i] += 1.5; // aumenta per maggiore distanza verticale
    }
  }
}

setInterval(draw, 50);
