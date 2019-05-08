$(document)
    .ready(function () {
        // This is for the slide-down menu up top!
        $('.masthead').visibility({
            once: false,
            onBottomPassed: function () {
                $('.fixed.menu').transition('fade in');
            },
            onBottomPassedReverse: function () {
                $('.fixed.menu').transition('fade out');
            }
        });
        // Attach the event
        $('.ui.sidebar').sidebar('attach events', '.toc.item');
        // Embed all the "ui embed" classes
        $(".ui.embed").embed();
    });