requirejs.config({
    baseUrl: '/',
    paths  : {
        main              : 'js/main',
        text              : 'lib/requirejs-text/text',
        json              : 'lib/requirejs-json/json',
        jquery            : 'lib/jquery/dist/jquery.min',
        underscore        : 'lib/underscore/underscore-min',
        backbone          : 'lib/backbone/backbone-min',
        marionette        : 'lib/marionette/lib/backbone.marionette.min',
        bootstrap         : 'bootstrap/js/bootstrap.min',
        socket_io         : 'lib/socket.io.client',
        "backbone.stickit": 'lib/backbone.stickit/backbone.stickit',
        md5               : 'lib/md5/md5.min'
    },

    shim: {
        "jquery"          : {
            exports: "$"
        },
        "underscore"      : {
            exports: "_"
        },
        "backbone"        : {
            "exports": "Backbone"
        },
        "marionette"      : {
            "exports": "Marionette"
        },
        "bootstrap"       : {
            deps: ['jquery']
        },
        "socket_io"       : {
            deps: ["jquery"]
        },
        "backbone.stickit": {
            "deps": ['backbone', 'underscore', 'jquery']
        }
    }
});