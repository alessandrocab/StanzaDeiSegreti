window.onload = function () {
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const characters = 'アァイィウヴエカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const fontSize = 20;
  const columnCount = Math.floor(canvas.width / fontSize);
  const drops = Array(columnCount).fill(0);
  const trails = 10;

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      for (let j = 0; j < trails; j++) {
        const y = (drops[i] - j * 2) * fontSize;
        if (y > 0 && y < canvas.height) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, y);
        }
      }

      if (Math.random() > 0.95) {
        drops[i] = 0;
      } else {
        drops[i] += 1;
      }
    }
  }

  setInterval(draw, 50);
};
