$(function() {

    $('img.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 0
    });



//Skrol
    $('.button-skrol').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
        }
        return false; // выключаем стандартное действие
    });

});
//priloader
$(window).on('load',function () {
    var $praloader = $('#preloader');
    $praloader.delay(1900).fadeOut('slow');
});


