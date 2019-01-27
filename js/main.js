$(function () {

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    
//     // Параллакс от движения мыши
//     if ($(window).width() > 960)
//     {
//         $('body').parallax({
//             'elements': [
//                 {
//                     'selector': '.man',
//                     'properties': {
//                         'x': {
//                             'right': {
//                                 'initial': 25,
//                                 'multiplier': 0.001,
//                                 'unit': '%',
//                                 'invert': false
//                             }
//                         },
//                         'y': {
//                             'top': {
//                                 'initial': 50,
//                                 'multiplier': 0.001,
//                                 'unit': '%',
//                                 'invert': false
//                             }
//                         }
//                     }
//                 }
//             ]
//         });
//     }

    // Анимация

    $(window).scroll(function() {
        $('.circle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    
});

// Окно

$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
})
$('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
})