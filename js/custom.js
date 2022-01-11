$(document).ready(function(){

    // written js  ==============;
    $('nav .menu-bar1').on('click', function(){
        $('.menu-list').toggleClass('show1');
    });


    // slick js   ===============;
    $('.banner-slider').slick({
        // autoplay: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    });
})