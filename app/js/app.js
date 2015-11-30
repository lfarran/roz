// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#videoModals').on('show.bs.modal', function (event) {
  var weddingDiv = $(event.relatedTarget) 
  var title = weddingDiv.find('.text-title').text();
  var url = weddingDiv.find('.url').text();

  var modal = $(this)
  modal.find('h2').text(title)
  modal.find('iframe').attr('src', url)
})

$('#videoModals').on('hide.bs.modal', function (event) {
  var modal = $(this)
  modal.find('h2').text(null)
  modal.find('iframe').attr('src', null)
})

// $('#photos').on('click',function(){
//   var viewer = new PhotoViewer();
//   for(var i=0;i<12;i++){
//     viewer.add('roz'+(i+1)+'.jpg');
//   }
//   viewer.show(0)
// });
jQuery('.navbar .nav > li > a').click(function(){
    jQuery('.navbar-collapse.navbar-ex1-collapse.in').removeClass('in').addClass('collapse').css('height', '0');
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})



  $('#photo-slider-container').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
    transition : 400, // Length (in milliseconds) of the fade transition.
    speed : 3500, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
    });
