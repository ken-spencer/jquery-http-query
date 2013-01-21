(function($)
{
    /* Jquery HTTP Query Plugin Version 1.0
    *  Copyright 2012, Kenneth Spencer
    *  Dual licensed under the MIT licenses.
    */

    /* Build HTTP Query String 
    */
    $.buildQuery = function(data)
    {
        var array = [];
        for (var key in data) {
            array.push(key + '=' + encodeURIComponent(data[key]).replace("%20", "+", 'g'));
        }
        
        return array.join('&');
    }

    /* Parse HTTP Query String
    */
    $.parseQueryString = function(query)
    { 
        if (query.substring(0, 1) == '?') {
            query = query.substring(1);
        }
        
        var parts = query.split('&');
        var retval = {};
        for (var i = 0, part; part = parts[i]; i++) {
  	        var set = part.split('=');
            retval[set[0]] = decodeURIComponent(set[1].replace(/\+/g, " "));
        }
        return retval;
    }
 
})(jQuery);

