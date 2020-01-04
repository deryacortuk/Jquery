$(function() {
    $(".blue-box").animate({
        "marginLeft": "+=200px",
        "opacity": "0",
        "height": "50px",
        "width": "50px",
        "marginTop": "25px"

    }, 1000);

    $("p").animate({
        "fontSize": "20px"

    }, 1000);

    $(function() {
        $(".lightbox").delay(500).fadeIn(1000);

    });

    $(".purple-box").fadeTo(1000, 0, function() {
        $(".green-box").fadeTo(1000, 0, function() {
            $(".blue-box").fadeTo(1000, 0, function() {
                alert("This is the callback: Animation finished.");
            });
        });

    });

    $(".green-box").animate({
        "margin-left": "+=200px"

    }, 1000, "linear");


    $(".blue-box").slideToggle(3000);
    $(".purple-box").slideDown(3000);
    $(".green-box").slideUp(3000);
    $(".purple-box").slideUp(3000);
    $("p").hide();
    $("p").slideDown(3000);




});