
// Hover Changes

$(document).ready(function () {

    // Bio
    $(".hoverBio").hover(function () {
            if ($(this).css('opacity') === 1) {
                $(this).stop(true, true).animate({backgroundColor: "#7397b1"}, "slow");
            }
        },
        function () {
            $(this).stop(true, true).animate({backgroundColor: "#90AFC5"}, "slow")
        });

    // Quote
    $("#quote").hover(function () {
            if ($(this).css('opacity') === 1) {
                $(this).stop(true, true).animate({backgroundColor: "#eee"}, "slow");
            }
        },
        function () {
            $(this).stop(true, true).animate({backgroundColor: "#ddd"}, "slow")
        });

    // Experience
    $("#experience").hover(function () {
            if ($(this).css('opacity') === 1) {
                $(this).stop(true, true).animate({backgroundColor: "#eee"}, "slow");
            }
        },
        function () {
            $(this).stop(true, true).animate({backgroundColor: "#ddd"}, "slow")
        });

    // Contact
    $(".hoverContact").hover(function () {
            if ($(this).css('opacity') === 1) {
                $(this).stop(true, true).animate({backgroundColor: "#34495e"}, "slow");
            }
        },
        function () {
            $(this).stop(true, true).animate({backgroundColor: "#4C5364"}, "slow")
        });
});