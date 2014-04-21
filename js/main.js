$(document).ready(function(){
    $('.main').onepage_scroll({
        beforeMove: function(){
            $('section .caption').fadeOut('slow');
        },
        afterMove: function(){
            $('section.active .caption').delay(500).fadeIn('slow');
        }
    });
    $('section .caption.lead').delay(1500).fadeIn('slow');
});
