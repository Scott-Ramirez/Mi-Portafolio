let titulo = document.getElementById("titulo");
let texto = "Anthony Scott Ramirez Sias";
let tiempo = 150; // tiempo de intervalo en milisegundos
let i = 0;

setInterval(function() {
  if (i < texto.length) {
    let caracter = texto.charAt(i);
    let span = document.createElement("span");
    span.innerText = caracter;
    titulo.appendChild(span);
    i++;
  }
}, tiempo);
