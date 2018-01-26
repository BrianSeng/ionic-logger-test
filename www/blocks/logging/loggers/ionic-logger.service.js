(function() 
{
    'use strict';
    
    var svc = 'IonicLogger';
    angular.module('blocks.logging')

    .service(svc, function() {
        var self = this;
        self.log = function (msg) {
            console.info("Logged with Ionic! - " + msg);
        }

        return self;
    });

})();