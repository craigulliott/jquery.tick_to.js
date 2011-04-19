/*
 * jQuery Tick To Plugin By Craig Ulliott 2011
 * version: 0.1
 *
 */
// create closure for the plugin
(function($) {
    
  // define the main method
  $.fn.TickTo = function(options) {

    // override default options
    var settings = jQuery.extend({
      from: null,
      to: 100,
      tick_size: 1,
      transition_time: 500
    }, options);
    
    // iterate through
    return this.each(function() {

      var $count_elt = $(this);
      $count_elt.html(settings.from);
      
      var tick = function(){
        var current = parseInt($count_elt.html());
        
        // we stop here when they are the same
        if ( current == settings.to ) {
          timeout_handler = null;
          return true;
        }

        var new_value = (settings.to>current) ? current+settings.tick_size : current-settings.tick_size;

        $count_elt.html(new_value);
        
        // update the interval we are using for the timer (so it always takes the full transition time)
        var new_interval = parseInt(settings.transition_time / Math.abs( settings.to - current ) / settings.tick_size);
        setTimeout(tick, new_interval);

      }
      
      // the first tick
      tick();
            
    });
        
  };
    
})(jQuery);
