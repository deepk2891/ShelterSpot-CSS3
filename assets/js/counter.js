$.fn.jQuerySimpleCounter = function ( options ) {
    var settings = $.extend(
        {
            start: 0,
            end: 100,
            easing: "swing",
            duration: 400,
            complete: ""
        },
        options
    );

    var thisElement = $( this );

    $( { count: settings.start } ).animate(
        { count: settings.end },
        {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
                var mathCount = Math.ceil( this.count );
                thisElement.text( mathCount );
            },
            complete: settings.complete
        }
    );
};

$( "#number1" ).jQuerySimpleCounter( { end: 120, duration: 4000 } );
$( "#number2" ).jQuerySimpleCounter( { end: 55, duration: 4000 } );
$( "#number3" ).jQuerySimpleCounter( { end: 99, duration: 4000 } );
$( "#number4" ).jQuerySimpleCounter( { end: 85, duration: 4000 } );
