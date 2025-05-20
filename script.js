window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const successSound = new Audio("success.mp3");
  const failSound = new Audio("fail.mp3");

  // Avvia il gioco
  document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("enigma1").style.display = "block";
    bgMusic.play();
  });

  // Toggle visibilità password
  function togglePassword(id) {
    const input = document.getElementById(id);
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  }
  window.togglePassword = togglePassword;

  // Chiudi messaggio di errore
  function closeCustomAlert() {
    document.getElementById("custom-alert").classList.add("hidden");
  }
  window.closeCustomAlert = closeCustomAlert;

  // Torna all'inizio
  function goBack() {
    location.reload();
  }
  window.goBack = goBack;

  // Normalizza la risposta utente (accenti, spazi, maiuscole)
  function normalizeAnswer(str) {
    return str
      .normalize("NFD")                     // separa caratteri e accenti
      .replace(/[\u0300-\u036f]/g, "")     // rimuove accenti
      .replace(/\s+/g, "")                 // rimuove spazi
      .toLowerCase();                      // tutto minuscolo
  }

  // Controlla risposta
  function checkEnigma(number) {
    const answers = {
      1: "8",
      2: "75",
      3: "stanzadellenecessita"
    };

    const input = document.getElementById(`input${number}`);
    if (!input) return;

    const userAnswer = normalizeAnswer(input.value);
    const correctAnswer = normalizeAnswer(answers[number]);

    if (userAnswer === correctAnswer) {
      document.getElementById(`enigma${number}`).style.display = "none";

      if (number < 3) {
        document.getElementById(`enigma${number + 1}`).style.display = "block";
      } else {
        bgMusic.pause();
        successSound.play();
        document.getElementById("revealed").style.display = "flex";
      }
    } else {
      failSound.currentTime = 0;
      failSound.play();
      document.getElementById("custom-alert").classList.remove("hidden");
    }
  }
  window.checkEnigma = checkEnigma;
});
