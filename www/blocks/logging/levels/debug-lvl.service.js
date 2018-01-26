(function () 
{
    'use strict';
//
// Log Level Strategy - DEBUG
//
    var svc = 'DebugLevel';
    angular
        .module('blocks.logging')
        .run(registerLevel)
        .service(svc, DebugLevel);

    function registerLevel(Logger, DebugLevel) 
    {
        console.info("LogLevel Module Loaded --> DEBUG");
        Logger.levels[DebugLevel.name] = DebugLevel;
    }
    function DebugLevel(IonicLogger, FirebaseLogger) 
    {
        var self = this;
        self.name = "DEBUG";
//
// Public Methods - error, warn, log, info
//
        self.error = _error;
        self.warn = _warn;
        self.log = _log;
        self.info = _info;
//
// Private Methods - error, warn, log, info
//
        function _error(msg, options) 
        {
            
        }
        function _warn(msg, options) 
        {
            
        }
        function _log(msg, options) 
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
        function _info(msg, options) 
        {
            
        }
    }
})();