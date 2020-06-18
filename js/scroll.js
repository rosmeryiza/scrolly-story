$(document).ready(function() {

    // init
    // var controllerSlide = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave',
    //         duration: "200%" // this works just fine with duration 0 as well
    //     }
    // });
       
    //   for(var i=1; i<3; i++) {
    //     var stringNum = i.toString();
    //     new ScrollMagic.Scene({
    //         triggerElement: "#lede" + stringNum,
    //     })
    //     .setPin("#message" + stringNum, {pushFollowers: false})
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controllerSlide);
    //   }

    
    var controller = new ScrollMagic.Controller();

    //scroll reveals

         // build scene with loop, reveal text
         for (var i=1; i<5; i++) {
            var stringNum = i.toString();
            new ScrollMagic.Scene({
                triggerElement: "#message" + stringNum,
                triggerHook: 0.9, // show, when scrolled 10% into view
                duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
                //offset: 50 // move trigger to center of element
            })
            .setClassToggle("#message" + stringNum, "visible") // add class to reveal
            //.addIndicators()
            .addTo(controller);
        }

        // reveal graphic
            new ScrollMagic.Scene({
                triggerElement: "#graphicReveal",
                triggerHook: 0.6, // show, when scrolled 10% into view
                duration: "80%",
                offset: 50 // move trigger to center of element
            })
            .setClassToggle("#graphicReveal", "visible") // add class to reveal
            //.addIndicators()
            .addTo(controller);

        // falling graphic
        for (var i=1; i<4; i++) {
            var stringNum = i.toString();
            var scene = new ScrollMagic.Scene({
                triggerElement: "#fall" + stringNum,
                triggerHook: "onLeave", 
                duration: "100%"
            })
            .setPin("#fall" + stringNum)
            //.addIndicators() 
            .addTo(controller);
        }

        new ScrollMagic.Scene({
            triggerElement: "#handReveal",
            triggerHook: 0.6, // show, when scrolled 10% into view
            duration: "100%",
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#handReveal", "visible") // add class to reveal
        //.addIndicators()
        .addTo(controller);
    
});