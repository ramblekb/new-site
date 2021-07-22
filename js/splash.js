$(window).load(function() {
    setTimeout(function() {
        $('#container').animate({ opacity: 1 }, 300);
        $('.preloader').fadeIn(500);
    }, 2000);
});