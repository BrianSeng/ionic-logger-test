(function () {
    'use strict';
//
// Logger Service - Core Svc for Client Use
//
    var svc = 'Logger';
    angular
        .module('blocks.logging')
        .service(svc, function () 
        {
            var self = this;
            var _currentLogLvl = {};
            self.setLogLevel = _setLogLevel;
            self.error = _error;
            self.warn = _warn;
            self.log = _log;
            self.info = _info;
            self.level = _levelName;
            self.levels = {};

            function _setLogLevel(lvl) 
            {
                _currentLogLvl = self.levels[lvl];
            }

            function _error(msg, options) 
            {
                //check to see that a log lvl is set and has a log method
                if (_currentLogLvl.error)
                    _currentLogLvl.error(msg, options);
                //if not, default to the console for now
                else
                    console.error('no log level was set');
            }
            function _warn(msg, options) 
            {
                //check to see that a log lvl is set and has a log method
                if (_currentLogLvl.warn)
                    _currentLogLvl.warn(msg, options);
                //if not, default to the console for now
                else
                    console.warn('no log level was set');
            }
            function _log(msg, options) 
            {
                //check to see that a log lvl is set and has a log method
                if (_currentLogLvl.log)
                    _currentLogLvl.log(msg, options);
                //if not, default to the console for now
                else
                    console.log('no log level was set');
            }
            function _info(msg, options) 
            {
                //check to see that a log lvl is set and has a log method
                if (_currentLogLvl.info)
                    _currentLogLvl.info(msg, options);
                //if not, default to the console for now
                else
                    console.info('no log level was set');
            }
            function _levelName() 
            { 
                return _currentLogLvl.name?_currentLogLvl.name:"Log Lvl Not Set"; 
            }
        });

})();