(function() 
{
    'use strict';
    
    var svc = 'HttpLogger';
    angular.module('blocks.logging')

    .service(svc, function() 
    {
        var self = this;
        self.send = function (msg) 
        {
            console.info("Sent to DB via HTTP! - " + msg);
        };

        return self;
    });

})();