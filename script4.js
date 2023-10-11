// script4.js

document.addEventListener('DOMContentLoaded', function() {
  var parrafos = document.querySelectorAll('.parrafo');
  var indiceActual = 0;

  window.mostrarSiguiente = function() {
    if (indiceActual < parrafos.length) {
      parrafos[indiceActual].classList.add('mostrar');
      indiceActual++;
      console.log("Función mostrarSiguiente llamada");
    } else {
      document.querySelector('.mostrar-mas').style.display = 'none';
    }
  };
});

