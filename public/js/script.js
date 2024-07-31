document.addEventListener("DOMContentLoaded", () => {
  const paragrafo = document.querySelector("p");
  const cabecalho = document.querySelector("header");
  const span = document.querySelector("span");
  const img = document.querySelectorAll("img");
  const elemento = document.querySelector("h2");
  const nav = document.querySelector("nav");
  const h1 = document.querySelector("h1");
  const strongP = document.querySelector("#primeiroStrong");
  const strongS = document.querySelector("#segundoStrong");
  const strongT = document.querySelector("#terceiroStrong");
  const strongQ = document.querySelector("#quartoStrong");
  const projeto = document.querySelector("#Projetos");
  const svg = document.querySelector("#parteBaixo");
  const svgParaBaixo = document.querySelector("#Baixo");
  const contato = document.querySelector('#Contatos')

  projeto.addEventListener("click", () => {
    const parteProjetos = document.querySelector("#logo");

    parteProjetos.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  contato.addEventListener('click',()=>{
    const entreContato = document.querySelector("#txtContato")
    entreContato.scrollIntoView({behavior: "smooth", block:"start"})
  })



  svgParaBaixo.addEventListener("click", () => {
    const rolagemBaixo = document.querySelector("#parteBaixo");
    rolagemBaixo.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  svg.addEventListener("click", () => {
    const VoltaAoTopo = document.querySelector("#Baixo");
    VoltaAoTopo.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const typed = document.querySelector("#elemento");
    typed = new Typed("#elemento", {
      strings: ["Developer", "Front-End"],
      typeSpeed: 80,
      backSpeed: 30,
      startDelay: 500,
      loop: true,
    });

    return typed;
  });

  const PrimeiraParte = () => {
    const textoTitulo = () => {
      h1.style.fontWeight = "lighter";
      h1.style.transition = "1s";
      h1.textContent = "<Eu sou o André Calixto/>";
    };

    const textoTituloBold = () => {
      h1.style.fontWeight = "bolder";
      h1.textContent = "Ola Mundo";
    };

    const tempoTexto = 2000;
    const tempoBold = 4000;

    setInterval(textoTitulo, tempoTexto);

    setInterval(textoTituloBold, tempoBold);

    const eventoTexto = ()=>{
      const primeiroTexto = () => {
        strongP.style.opacity = "100%";
      };
  
      const tempoP = 1200;
      setTimeout(primeiroTexto, tempoP);
  
      const segundoTexto = () => {
        strongS.style.opacity = "100%";
      };
  
      const tempoS = 2000;
      setTimeout(segundoTexto, tempoS);
  
      const terceiroTexto = () => {
        strongT.style.opacity = "100%";
      };
  
      const tempoT = 3000;
  
      setTimeout(terceiroTexto, tempoT);
  
      const quartoTexto = () => {
        strongQ.style.opacity = "100%";
      };
  
      const tempoQ = 4000;
  
      setTimeout(quartoTexto, tempoQ);
    }
    eventoTexto()
  };

  PrimeiraParte();

  const Footer = ()=>{

  }

  AOS.init();
});
