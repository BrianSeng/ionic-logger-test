(function () 
{
    'use strict';

    var svc = 'QuietLevel';
    angular
        .module('app.logger')
        .run(registerLevel)
        .service(svc, QuietLevel);

    function registerLevel(Logger, QuietLevel) 
    {
        console.log("Logging Module Run --> QUIET");
        Logger.levels[QuietLevel.name] = QuietLevel;
    }
    function QuietLevel(HttpLogger) 
    {
        var self = this;
        self.name = svc;

        self.log = function (msg, options) 
        {
            if (HttpLogger.send) 
            {
                HttpLogger.send(msg);
            } 
        }

        self.warn = function (msg, options) 
        {
            if (HttpLogger.send) 
            {
                HttpLogger.send(msg);
            } 
        }
    }
})();