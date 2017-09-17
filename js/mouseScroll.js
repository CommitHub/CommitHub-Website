$(document).ready(function() {

    ///Mouse Scroll Animation
    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50
    });

});