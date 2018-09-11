$(window).on("scroll", function() {
    if($(window).scrollTop() > 25) {
        $(".mainnav").addClass("scrollnav");
    } else {
       $(".mainnav").removeClass("scrollnav");
    }
});