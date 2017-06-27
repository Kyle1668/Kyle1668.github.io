
// Fade Effects

$(document).ready(function() {

    var allContentLoaded = false;

    // Fade scroll instructions
    $(window).scroll(function () {
        $(".down-arrow").animate({opacity: 0},2000);
    });

    // Shows all content is the user loads the page and is not at the top.
    if ($(window).scrollTop() !== 0) {
        $(".hideme").animate({"opacity": "1"}, 3000);
        allContentLoaded = true;
    }

    // Show on scroll
    $(window).scroll(function() {
        if (!allContentLoaded) {
            $('.hideme').each(function() {

                // Screen Position
                const bottom_of_object = $(this).offset().top + $(this).outerHeight();
                const bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > (bottom_of_object * 0.85)) {
                    $(this).animate({'opacity': '1'}, 3000);
                }

            });
        }
    });

});
