// Scrolling Button JS (JQuery) Code
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.info').offset().top }, 'slow');
      return false;
    });
  });