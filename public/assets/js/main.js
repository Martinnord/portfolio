$(document).ready(function (){

var windowH = $(window).height();
$('.jumbotron').css('height', windowH);

console.log($("#services").scrollTop());

$('#scrollDown').click(function(){
  $('html, body').animate({
    scrollTop: $("#services").offset().top
  }, 2000);

});

$(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $('.work').offset().top
    }, 1000);
});

$(function () {
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click ', function() {
  $('.navbar-toggle:visible').click();
      });
});

$(function() {
  $("#title").typed({
    strings: [""],
    typeSpeed: 0
  });
});

}); // Ready ends here
