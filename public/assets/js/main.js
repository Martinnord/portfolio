$(document).ready(function (){

var windowH = $(window).height();
$('.jumbotron').css('height', windowH);

console.log($("#services").scrollTop());

$('#scrollDown').click(function(){
  $('html, body').animate({
    scrollTop: $("#services").offset().top
  }, 2000);

});

function navigateToSection(element) {
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, 1000);
}

$('.scroll').on('click', function(e) {
  navigateToSection(e.currentTarget.attributes[0].nodeValue);
});


$(function () {
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click ', function() {
  $('.navbar-toggle:visible').click();
      });
});

$(function() {
  $("#title").typed({
    strings: ["Hello I'm Martin", "I am an iOS developer"],
    typeSpeed: 70
  });
});

}); // Ready ends here
