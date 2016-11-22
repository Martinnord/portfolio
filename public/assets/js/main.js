$(document).ready(function (){

var windowH = $(window).height();
$('.jumbotron').css('height', windowH);

console.log($("#services").scrollTop());

$('#scrollDown').click(function(){
  $('html, body').animate({
    scrollTop: $("#services").offset().top
  }, 2000);

});



}); // Ready ends here
