(function() 
{
    'use strict';
    
    var svc = 'IonLogSvc';
    angular.module('app.logger')

    .service(svc, function() {
        var self = this;
        self.log = function (msg, opts) {
            console.info("Logged with Ionic!");
            console.info(opts.timeStamp + " - " + msg);
        }

        return self;
    });

})();