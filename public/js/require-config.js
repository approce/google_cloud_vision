requirejs.config({
    baseUrl: '/',
    paths  : {
        text              : 'lib/require/text',
        json              : 'lib/require/json',
        jquery            : 'lib/jquery.min',
        underscore        : 'lib/underscore-min',
        main              : 'js/main',
        backbone          : 'lib/backbone/backbone-min',
        marionette        : 'lib/marionette/backbone.marionette.min',
        bootstrap         : 'lib/bootstrap/js/bootstrap.min',
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