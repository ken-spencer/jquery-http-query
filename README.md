# jquery.HTTP

A simple plugin for building and parsing HTTP query strings

## Installation

Include script *after* the jQuery library:

    <script src="/path/to/jquery.http_query.js"></script>

** Do not include the script directly from GitHub

## Usage

    // Buidl an HTTP query string from an object
    var query = {
        foo : 'bar',
        test : 'test string'
    };
    var queryString = $.buildQuery(query);

    // Set the browser's query string
    window.location.search = queryString;


    //Parse an HTTP query String into an object
    var queryString = "foo=bar&test=my+test";
    var query = $.parseQueryString(queryString);
    console.log(query);

## Authors
    
[Kenneth Spencer](https://github.com/ken-spencer)
