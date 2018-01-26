(function () 
{
    'use strict';

    var svc = 'DebugLevel';
    angular
        .module('app.logger')
        .run(registerLevel)
        .service(svc, DebugLevel);

    function registerLevel(Logger, DebugLevel) 
    {
        console.log("Logging Module Run --> DEBUG");
        Logger.levels[DebugLevel.name] = DebugLevel;
    }
    function DebugLevel(IonicLogger, FirebaseLogger) 
    {
        var self = this;
        self.name = svc;

        self.log = function (msg, options) 
        {
            if (IonicLogger.log) 
            {
                IonicLogger.log(msg); 
            }
            if (FirebaseLogger.log) 
            {
                FirebaseLogger.log(msg);    
            }    
        }
    }
})();