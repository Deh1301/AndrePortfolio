document.addEventListener("DOMContentLoaded", () => {
  const txt = document.querySelector("#texto");
  const letraA = document.querySelector("#letraA");
  const letraN = document.querySelector("#letraN");
  const letraD = document.querySelector("#letraD");
  const letraR = document.querySelector("#letraR");
  const letraE = document.querySelector("#letraE");
  const sobrenome = document.querySelector("#sobrenome");
  const h2 = document.querySelector("h2");
  const button = document.querySelector("button");

  function TypedTxt() {
    txt.style.color = "aliceblue";
    txt = new Typed("#texto", {
      strings: ["Ola Mundo", "Esse é o meu Portfólio", "Bem Vindo!"],
      typedSpeed: 50,
      backSpeed: 25,
      startDelay: 800,
      loop: true,
    });
  }

  const tempo = 3000;
  setTimeout(TypedTxt, tempo);

  function carregarLetraA() {
    letraA.style.opacity = "100%";
    letraA.style.transition = ".6s";
  }

  const tempoA = 1000;

  setTimeout(carregarLetraA, tempoA);

  function carregarLetraN() {
    letraN.style.opacity = "100%";
    letraN.style.transition = ".6s";
  }

  const tempoN = 1300;

  setTimeout(carregarLetraN, tempoN);

  function carregarLetraD() {
    letraD.style.opacity = "100%";
    letraD.style.transition = ".6s";
  }

  const tempoD = 1600;

  setTimeout(carregarLetraD, tempoD);

  function carregarLetraR() {
    letraR.style.opacity = "100%";
    letraR.style.transition = ".6s";
  }

  const tempoR = 1900;

  setTimeout(carregarLetraR, tempoR);

  function carregarLetraE() {
    letraE.style.opacity = "100%";
    letraE.style.transition = ".6s";
  }

  const tempoE = 2100;

  setTimeout(carregarLetraE, tempoE);

  function SobrenomeVisivel() {
    sobrenome.style.opacity = "100%";
    sobrenome.style.transition = ".7s";
  }

  const tempoSobrenome = 2300;

  setTimeout(SobrenomeVisivel, tempoSobrenome);

  function Rodape() {
    h2.style.opacity = "100%";
    h2.style.transition = ".7s";
  }

  const tempoRodape = 2700;

  setTimeout(Rodape, tempoRodape);

  const botao = () => {
    button.style.opacity = "100%";
    button.style.transition = ".7s";
  };

  const tempoBotao = 2900;

  setTimeout(botao, tempoBotao);
});
