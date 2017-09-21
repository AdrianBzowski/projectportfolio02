$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 3000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// init controller
var controller = new ScrollMagic.Controller();
// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: ".spacing"
    })
    // trigger animation by adding a css class
    .setClassToggle(".main__text", "opacityoff")
//    .addIndicators({
//        name: "1 - add a class"
//    }) // add indicators (requires plugin)
    .addTo(controller);


//STAGE CONTENT ACCESS
var scene = new ScrollMagic.Scene({
        triggerElement: ".spacing",
        duration: 900
    })
    // trigger animation by adding a css class
    .setClassToggle(".container__header__about", "opacityon")
//    .addIndicators({
//        name: "1 - add a class"
//    }) // add indicators (requires plugin)
    .addTo(controller);


new ScrollMagic.Controller();
var tween = TweenMax.staggerFromTo(".container__header__about", 2, {
    top: 300
}, {
    top: 0

});
var scene = new ScrollMagic.Scene({
        triggerElement: ".spacing",
        duration: 1100
    })
    .setTween(tween)
//    .addIndicators({
//        name: "staggering"
//    }) // add indicators (requires plugin)
    .addTo(controller);

//STAGE CONTENT ACCESS END




//new ScrollMagic.Controller();
//var tween = TweenMax.staggerFromTo(".rocket__inner", 2, {
//    left: 1500
//}, {
//    left: 100,
//    top: 0
//});
//var scene = new ScrollMagic.Scene({
//        triggerElement: ".spacing",
//        duration: 900
//    })
//    .setTween(tween)
//    .addIndicators({
//        name: "staggering"
//    }) // add indicators (requires plugin)
//    .addTo(controller);
//
//new ScrollMagic.Controller();
//var tween = TweenMax.staggerFromTo(".rocket__laser", 2, {
//    left: 1500,
//}, {
//    left: 0,
//    top: 0,
//    opacity: 0
//});
//var scene = new ScrollMagic.Scene({
//        triggerElement: ".spacing",
//        duration: 900
//    })
//    .setTween(tween)
//    .addIndicators({
//        name: "staggering"
//    }) // add indicators (requires plugin)
//    .addTo(controller);

new ScrollMagic.Scene({
        duration: 700, // the scene should last for a scroll distance of 100px
        offset: 0 // start this scene after scrolling for 50px
    })
    .setPin("#main") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}
