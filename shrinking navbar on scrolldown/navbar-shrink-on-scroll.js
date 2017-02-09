/**
 * Created by Krzysiek on 2/9/2017.
 */
$(document).ready(function(){

    $(window).scroll(function() {

        if (window.innerWidth >= 992)
        {
            if ($(document).scrollTop() > 150) {
                $('.navbar').addClass('shrink');
            } else {
                $('.navbar').removeClass('shrink');
            }
        }

    });
});