// script4.js

document.addEventListener('DOMContentLoaded', function() {
  var parrafos = document.querySelectorAll('.parrafo');
  var mostrarMasBtn = document.querySelector('.mostrar-mas');
  var mostrarMenosBtn = document.querySelector('.mostrar-menos');
  var indiceActual = 0;

  window.mostrarSiguiente = function() {
    if (indiceActual < parrafos.length) {
      parrafos[indiceActual].classList.add('mostrar');
      indiceActual++;

      if (indiceActual === parrafos.length) {
        // Todos los párrafos están mostrados, ocultar "Mostrar más"
        mostrarMasBtn.style.display = 'none';
        mostrarMenosBtn.style.display = 'inline-block';
      }
    }
  };

  window.mostrarMenos = function() {
    // Ocultar todos los párrafos y mostrar solo el primero
    parrafos.forEach(function(parrafo, index) {
      parrafo.classList.remove('mostrar');
      if (index === 0) {
        parrafo.classList.add('mostrar');
      }
    });

    // Reiniciar el índice para "Mostrar más"
    indiceActual = 1;

    // Mostrar "Mostrar más" y ocultar "Mostrar menos"
    mostrarMasBtn.style.display = 'inline-block';
    mostrarMenosBtn.style.display = 'none';
  };

  // Mostrar solo el primer párrafo al cargar la página
  mostrarMenos();
});

