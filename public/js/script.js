
$(".down-to-bio").on("click", function(){
    $("html, body").animate({
        "scrollTop" : $("#bioPage").position().top
    });
});