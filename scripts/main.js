// Scrolling Button JQuery Code
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 1500);
      return false;
    });
  });