(function() 
{
    'use strict';
    
    var svc = 'IonicLogger';
    angular.module('app.logger')

    .service(svc, function() {
        var self = this;
        self.log = function (msg) {
            console.info("Logged with Ionic! - " + msg);
        }

        return self;
    });

})();