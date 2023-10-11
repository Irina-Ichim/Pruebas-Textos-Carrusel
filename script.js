$(document).ready(function() {
  var parrafos = $('.parrafo');
  var indiceActual = 0;

  function mostrarSiguiente() {
    if (indiceActual < parrafos.length) {
      $(parrafos[indiceActual]).slideDown();
      indiceActual++;
    } else {
      $('.mostrar-mas').hide();
    }
  }

  // Asignar la función al evento click
  $('.mostrar-mas').on('click', mostrarSiguiente);
});


  