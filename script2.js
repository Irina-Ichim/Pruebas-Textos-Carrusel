/* Otro estilo para el texto utilizando FadeIn, cambialo en index.html*/
$(document).ready(function() {
  var parrafos = $('.parrafo');
  var indiceActual = 0;

  function mostrarSiguiente() {
    if (indiceActual < parrafos.length) {
      $(parrafos[indiceActual]).fadeIn(); // Cambiado a fadeIn
      indiceActual++;
    } else {
      $('.mostrar-mas').hide();
    }
  }

  $('.mostrar-mas').on('click', mostrarSiguiente);
});
