$(document).ready(function(){
  $('.box-1').on('click', function(){
    $('.box-2').show(800, "linear");
  });
  $('.box-2').on('click', function(){
    $('.box-3').show(800, "linear");
  });
  $('.box-3').on('click', function(){
    $('.box-4').show(800, "linear");
  });
  $('.box-4').on('click', function(){
    $('.box-1 h1').replaceWith("<h1>Happy birthday</h1>");
    $('.box-2 h2, .box-3 h2').replaceWith("<h2>Happy birthday</h2>");
    $('body').css('background-image', 'url("img/happy.jpg")');
    $('.box').addClass('opacity');
    var player = document.querySelector('#audio-player');
    $('#audio-player').trigger("play");
  });
});
