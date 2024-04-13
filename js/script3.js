$(document).ready(function() {
  let parrafos = $('.parrafo');
  let indiceActual = 0;

  function mostrarSiguiente() {
    if (indiceActual < parrafos.length) {
      $(parrafos[indiceActual]).fadeIn().css('color', '#de43ba'); // Cambiado a fadeIn y color
      indiceActual++;
    } else {
      $('.mostrar-mas').hide();
    }
  }

  $('.mostrar-mas').on('click', mostrarSiguiente);

  
  });
  