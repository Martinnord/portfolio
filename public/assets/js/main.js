$(document).ready(function (){

var windowH = $(window).height();
$('.jumbotron').css('height', windowH);

console.log($("#services").scrollTop());

$('#scrollDown').click(function(){
  $('html, body').animate({
    scrollTop: $("#services").offset().top
  }, 2000);

});

$(function() {
  $("#title").typed({
    strings: ["Hi, I'm Martin"],
    typeSpeed: 1000
  });
});

//$(".").css("font-size": "20px;");


}); // Ready ends here
