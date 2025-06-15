const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

const musica = document.getElementById("musica");
musica.volume = 0.1;

document.body.addEventListener("click", () => {
  musica.play();
});

btnNao.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
  btnNao.style.position = "fixed";
  btnNao.style.left = `${x}px`;
  btnNao.style.top = `${y}px`;
});

btnSim.addEventListener("click", () => {
  mensagem.textContent = "💒 Casamento marcado! 💖";
});