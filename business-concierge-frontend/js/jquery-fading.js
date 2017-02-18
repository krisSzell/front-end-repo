/**
 * Created by Krzysiek on 2/7/2017.
 */
$(document).ready(function(){
    var ACTIVE_CLASS = 'active';
    var SLIDE_TIME = 1200;
    var SCROLL_TIME = 1500;

    $('.btn-featurette-detail').click(function () {
        // Easier and more reusable :
        var $target = $($(this).attr('href'));
        if ($target.not('.' + ACTIVE_CLASS)) {
            $('.service-desc').slideUp(SLIDE_TIME);
            $('.service-desc.active').removeClass(ACTIVE_CLASS);
            $target.addClass(ACTIVE_CLASS).slideDown(SLIDE_TIME);
            $('html,body').animate({scrollTop: $(this).offset().top}, SCROLL_TIME);
        }

        // if ($(this).is('#business-plans-fadein-btn'))
        // {
        //     $('#websites').slideUp(1200);
        //     $('#logos').slideUp(1200);
        //     $('#business-plans').slideDown(1200);
        //     $('html,body').animate({
        //      scrollTop: $(this).offset().top}, 1500);
        // }
        // if ($(this).is('#websites-fadein-btn'))
        // {
        //     $('#business-plans').slideUp(1200);
        //     $('#logos').slideUp(1200);
        //     $('#websites').slideDown(1200);
        //     $('html,body').animate({
        //      scrollTop: $(this).offset().top}, 1500);
        // }
        // if ($(this).is('#logos-fadein-btn'))
        // {
        //     $('#business-plans').slideUp(1200);
        //     $('#websites').slideUp(1200);
        //     $('#logos').slideDown(1200);
        //     $('html,body').animate({
        //      scrollTop: $(this).offset().top}, 1500);
        // }
    });
    $('.services-back-btn').click(function(){
        $('html,body').animate({
            scrollTop: $('#services').offset().top}, 1000);
        $('.service-desc').slideUp(1200);
    });
});