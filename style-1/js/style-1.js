$(function(){
  $('#red-packet-button').click(function(){
    $('.page-1').addClass('hidden');
    $('.page-2').removeClass('hidden');
  });

  $('#receive-awards-button').click(function() {
    $('.page-2').addClass('hidden');
    $('.page-3').removeClass('hidden');
  });

  $('#phone-number-button').click(function() {
    $('.page-3').addClass('hidden');
    $('.page-4').removeClass('hidden');
  });
})