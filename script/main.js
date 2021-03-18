function handleIn(e) {
  $(this).find('.portfolio-content').removeClass('hidden')
}

function handleOut(e) {
  $(this).find('.portfolio-content').addClass('hidden')
}

$('.portfolio-item').hover(handleIn, handleOut)

$(function () {

  $('.reviews-slider').slick();

});
