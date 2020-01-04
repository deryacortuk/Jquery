$(function() {
    //$("p").css("background-color", "rgba(180,180,30,0.8)");
    //$(".purple-box").css("background-color", "rgba(180,180,30,0.8)");
    //$("#list").css("background-color", "rgba(180,180,30,0.8)");
    //  $("input[type='text']").css("background-color", "rgba(180,180,30,0.8)");
    $("li:first").css("background-color", "rgb(242, 157, 253,0.7)");

    $(function() {


        const items = $("#list").find("li");
        highlight(items);


        const children = $("#list").children("li");
        highlight(children);


        const body = $("#list").parents("body");
        highlight(body);


        const content = $("#list").parent();

        const headlines = $("#list").siblings(":header");
        highlight(headlines);

        const previous = $("#list").prev();
        highlight(previous);


        const next = $("#list").next();
        highlight(next);

    });

    function highlight(element) {
        element.css("background-color", "rgb(242, 157, 253,0.5)");
    }
    const everySecondItem = $("#list").children("li").filter(":even");
    highlight(everySecondItem);


    const everyThirdItem = $("li li").filter(function(index) {
        return index % 3 == 1;
    });
    highlight(everyThirdItem);


    const first = $("li").first();
    highlight(first);


    const last = $("li").last();
    highlight(last);


    const fifth = $("li").eq(4);
    highlight(fifth);


    const secondLast = $("li").eq(-2);
    highlight(secondLast);

});


function highlight(element) {
    element.css("background-color", "rgba(180, 180, 30, 0.8)");

};