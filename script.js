let amigos = {};

fetch("/dados.json")
  .then(response => response.json())
  .then(data => amigos = data)
  .catch(() => alert("Erro ao carregar os dados"));

function iniciarRevelacao() {
  const nome = document.getElementById("nome").value;
  const resultado = document.getElementById("resultado");
  const suspense = document.getElementById("suspense");
  const contador = document.getElementById("contador");
  const audio = document.getElementById("audio");

  if (!nome || !amigos[nome]) {
    resultado.innerText = "Nome não encontrado.";
    return;
  }

  resultado.innerHTML = "";
  suspense.classList.remove("hidden");

  audio.currentTime = 0;
  audio.play();

  let tempo = 10;
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
