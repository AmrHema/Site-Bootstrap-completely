$(document).ready(function () {
    // Nice Scroll
    $("body").niceScroll();
    //caching loading
    $(".loading").fadeOut();
    //changing interval slider
    $(".carousel").carousel({
        interval: 2000,
        pause: "hover"
    });

    $(".gear-check").click(function () {
        $(".option-box .Color-option").toggle(500);
    });

    $(".option-box .Color-option ul li")
        .eq(0).css("background", "bleu").end()
        .eq(1).css("background", "#08bf08").end()
        .eq(2).css("background", "#1cece4").end()
        .eq(3).css("background", "#f9ff05").end()
        .eq(4).css("background", "rgb(204, 18, 189)").end();


      //Show and Hide Scroll button
    var btnScroll = $(".scroll-up");
    $(window).scroll(function () {
        //if ($(this).scrollTop() >= 800) { btnScroll.fadeIn(1000) }
        //else { btnScroll.fadeOut(1000) };

        $(this).scrollTop() >= 800 ? btnScroll.fadeIn(1000) : btnScroll.fadeOut(1000);
    });

    //Scroll to up
    $(".ToUp").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

