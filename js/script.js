// STICKY NAVBAR

// When the user scrolls the page, execute myFunction
// window.onscroll = function() { myFunction() };

// Get the navbar
// var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

(function() {
        $(window).load(function() {
            setTimeout(function() {
                $('.loader').fadeOut();
                start();
            }, 150);
        });

        $(document).ready(function() {
            $('#splash').css('opacity', '0.5'); // doing this with jQuery for ease
            // Stopping a loop
            for (var i = 0; i < 5000; i++) {
                if (i == 5000) {
                    // here are the basics, just like your existing code
                    $("#splash").click(function() {
                        $("#splash").fadeOut("slow"); // you could also use $(this).fadeOut('slow');

                    })
                }
            };



            // (function() {
            //     $(window).load(function() {
            //         setTimeout(function() {
            //             $('.loader').fadeOut();
            //             start();
            //         }, 150);
            //     });

            //     $(document).ready(function() {
            //         $('.splash').slideToggle(3000);
            //         $('.frame1').delay(3200).show('slide', { direction: 'right' }, 1000);
            //         $('.frame2').delay(3300).show('slide', { direction: 'left' }, 1000);
            //         $('.frame3').delay(3800).slideToggle(1000);
            //         $('.frame3').css('line-height', '400px');
            //         $('.frame2').delay(4000).hide('slide', { direction: 'left' }, 1000);
            //         $('.frame1').delay(4200).hide('slide', { direction: 'right' }, 1000);
            //         $('.splash').delay(4500).slideToggle(2000);
            //         $('.frame3').delay(4800).transition({
            //             scale: [
            //                 1.2,
            //                 1.2
            //             ],
            //             duration: 1000
            //         });
            //         $('.splash').delay(500).animate({ width: '50%' }, 1000);
            //     });
            // }.call(this));

            // $('.carousel').carousel({
            //     interval: 2000
            // })

            // var granimInstance = new Granim({
            //     element: '#canvas-basic',
            //     direction: 'left-right',
            //     isPausedWhenNotInView: true,
            //     states: {
            //         "default-state": {
            //             gradients: [
            //                 [
            //                     { color: '#833ab4', pos: .2 },
            //                     { color: '#fd1d1d', pos: .8 },
            //                     { color: '#38ef7d', pos: .95 }
            //                 ],
            //                 [
            //                     { color: '#40e0d0', pos: 0 },
            //                     { color: '#ff8c00', pos: .2 },
            //                     { color: '#ff0080', pos: .90 }
            //                 ],
            //             ]
            //         }
            //     }
            // });
        });