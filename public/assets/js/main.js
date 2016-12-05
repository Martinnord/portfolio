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
    strings: [""],
    typeSpeed: 0
  });
});

//$(".").css("font-size": "20px;");


}); // Ready ends here
