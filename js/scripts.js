$(document).ready(function () {
    $(".navbar-right li").click(function () {
        $(".navbar-right li").removeClass("active");
        $(this).addClass("active");
    });
});