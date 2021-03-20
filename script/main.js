function handleIn(e) {
  $(this).find('.portfolio-content').removeClass('hidden')
}

function handleOut(e) {
  $(this).find('.portfolio-content').addClass('hidden')
}

$('.portfolio-item').hover(handleIn, handleOut)

$(function () {

  $('.reviews-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="Arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="Arrow"></button>'
  });

});
