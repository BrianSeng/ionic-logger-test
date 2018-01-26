(function() 
{
    'use strict';
    
    var svc = 'FirebaseLogger';
    angular.module('blocks.logging')

    .service(svc, function() {
        var self = this;
        self.log = function (msg) {
            console.info("Logged with Firebase! - " + msg);
        }

        return self;
    });

})();