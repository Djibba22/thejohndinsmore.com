
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
      setTimeout(function() {$('.radial-progress1').attr('data-progress', 90);}, 1000);
      setTimeout(function() {$('.radial-progress2').attr('data-progress', 80);}, 2000);
      setTimeout(function() {$('.radial-progress3').attr('data-progress', 65);}, 3000);
      setTimeout(function() {$('.radial-progress4').attr('data-progress', 95);}, 4000);
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view, console.log($window.height()));
$window.trigger('scroll');

//These are the skills Progress wheels
$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
// window.progress = function() {
// 	$('.radial-progress').attr('data-progress', 90);
// }
// $('.content-2').scroll(window.progress);
setTimeout(check_if_in_view, 2000);
// $('.radial-progress').click(window.progress);

// Read more here: https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9
