(function() 
{
    'use strict';
    
    var svc = 'FirebaseLogger';
    angular.module('blocks.logging')

    .service(svc, function() {
        var self = this;
        self.error = function (msg) {
            console.error("Logged with Firebase! - " + msg);
        }
        self.log = function (msg) {
            console.log("Logged with Firebase! - " + msg);
        }
        return self;
    });

})();