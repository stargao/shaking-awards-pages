$(function(){
    $('#click-red-packet-btn').click(function(){
        $(this).hide();
        $('.awards-content').removeClass('hidden');
    });

    $('#be-dealer-btn').click(function(){
        $('.page-1').hide();
        $('.page-2').removeClass('hidden');
    });

    $('#select-phone-btn').click(function(){
        $('.page-2').hide();
        $('.page-3').removeClass('hidden');
    });

    $('#submit-order-btn').click(function(){
        $('.page-3').hide();
        $('.page-4').removeClass('hidden');
    })
})