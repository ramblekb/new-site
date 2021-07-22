$(window).load(function () {
    setTimeout(function () {
        $('.loader').fadeOut();
        start();
    }, 150);
});

$(document).ready(function () {
    $('#splash').css('opacity', '0.5'); 
    for (var i = 0; i < 5000; i++) {
        if (i == 5000) {
            $("#splash").click(function () {
                $("#splash").fadeOut("slow")
            });