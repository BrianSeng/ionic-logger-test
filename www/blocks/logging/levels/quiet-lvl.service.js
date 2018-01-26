(function () 
{
    'use strict';
//
// Log Level Strategy - QUIET
//
    var svc = 'QuietLevel';
    angular
        .module('blocks.logging')
        .run(registerLevel)
        .service(svc, QuietLevel);

    function registerLevel(Logger, QuietLevel) 
    {
        console.info("LogLevel Module Loaded --> QUIET");
        Logger.levels[QuietLevel.name] = QuietLevel;
    }
    function QuietLevel(HttpLogger) 
    {
        var self = this;
        self.name = "QUIET";

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