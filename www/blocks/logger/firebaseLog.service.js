(function() 
{
    'use strict';
    
    var svc = 'FirebaseLogSvc';
    angular.module('app.logger')

    .service(svc, function() {
        var self = this;
        self.log = function (msg, opts) {
            console.info("Logged with Firebase!");
            console.info(opts.timeStamp + " - " + msg);
        }

        return self;
    });

})();