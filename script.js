const amigos = {
  "Mara": "Nena",
  "Renata": "Gisele",
  "Renata Ferreira": "Bruna",
  "Gisele": "Ana"
};

function iniciarRevelacao() {
  const nome = document.getElementById("nome").value;
  const resultado = document.getElementById("resultado");
  const suspense = document.getElementById("suspense");
  const contador = document.getElementById("contador");
  const audio = document.getElementById("audio");

  if (!nome) {
    resultado.innerText = "Por favor, selecione seu nome.";
    return;
  }

  // Limpa resultado anterior
  resultado.innerHTML = "";

  // Mostra suspense
  suspense.classList.remove("hidden");

  // Inicia música
  audio.currentTime = 0;
  audio.play();

  let tempo = 10; // ⬅️ CONTAGEM DE 10 SEGUNDOS
  contador.innerText = tempo;

  const intervalo = setInterval(() => {
    tempo--;
    contador.innerText = tempo;

    if (tempo === 0) {
      clearInterval(intervalo);

      suspense.classList.add("hidden");
      audio.pause();

      resultado.innerHTML = `
        ✨ Seu amigo secreto é ✨<br><br>
        💖 <strong>${amigos[nome]}</strong> 💖<br><br>
        Guarde segredo 🤫
      `;
    }
  }, 1000);
}
