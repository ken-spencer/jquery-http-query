(function($)
{
    /* Jquery HTTP Plugin Version 1.0
    *  Copyright 2012, Kenneth Spencer
    *  Dual licensed under the MIT or GPL Version 2 licenses.
    */

    /* 
    * name - the name of the cookie
    * value - the value of the cookie
    * Options: 
    * expires - int in days or Date object
    * path - set to / if avail on whole site
    * domain - default to current domain
    * secure - (bool) https is required
    * 
    */
    $.cookie = function(name, value, options)
    {
        if (!name) {
            return false;    
        }

        if (typeof value != 'undefined') { // name and value given, set cookie
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            if (typeof value == 'object' && jQuery.toJSON) {
                value = jQuery.toJSON(value);
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }

            var path = options.path ? '; path=' + (options.path) : '';
            var domain = options.domain ? '; domain=' + (options.domain) : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else { // only name given, get cookie
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            if (jQuery.evalJSON && cookieValue && cookieValue.match(/^\s*\{/)) {
                try {
                    cookieValue = jQuery.evalJSON(cookieValue);
                } catch (e) {
                }
            }
            return cookieValue;
        }
    }

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

