
$(window).on('scroll', function() {
    $('.fade-in-up').each(function() {
      if ($(this).isInViewport()) {
        $(this).addClass('animated');
      }
    });
  });
  
  // Check if element is in viewport
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };