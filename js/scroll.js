$(document).ready(function() {

    // init
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
                duration: "60%"
            })
            .setPin("#fall" + stringNum)
            //.addIndicators() 
            .addTo(controller);
        }

        // new ScrollMagic.Scene({
        //     triggerElement: "#handReveal",
        //     triggerHook: 0.6, // show, when scrolled 10% into view
        //     offset: 50, // move trigger to center of element
        //     reverse: false // only do once
        // })
        // .setClassToggle("#handReveal", "big") // add class to reveal
        // //.addIndicators()
        // .addTo(controller);

        // hide graphic
        new ScrollMagic.Scene({
            triggerElement: "#graphicHide",
            triggerHook: 0.6, // show, when scrolled 10% into view
            duration: "80%",
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#graphicHide", "invisible") // add class to reveal
        //.addIndicators()
        .addTo(controller);
    
});