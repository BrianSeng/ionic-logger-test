(function () {
    'use strict';
//
// Logger Service - Core Svc for Client Use
//
    var svc = 'Logger';
    angular
        .module('app.logger')
        .service(svc, function () 
        {
            var self = this;
            var _logger = {};
            self._setLevel = _setLevel;
            self.error = _error;
            self.warn = _warn;
            self.log = _log;
            self.info = _info;
            self.level = _levelName;
            self.levels = {};

            function _setLevel(lvl) 
            {
                _logger = self.levels[lvl];
            }

            function _error(msg, options) 
            {
                //check to see that a logger is set and has a log method
                if (_logger.error)
                    _logger.error(msg, options);
                //if not, default to the console for now
                else
                    console.error('no logger was set');
            }
            function _warn(msg, options) 
            {
                //check to see that a logger is set and has a log method
                if (_logger.warn)
                    _logger.warn(msg, options);
                //if not, default to the console for now
                else
                    console.warn('no logger was set');
            }
            function _log(msg, options) 
            {
                //check to see that a logger is set and has a log method
                if (_logger.log)
                    _logger.log(msg, options);
                //if not, default to the console for now
                else
                    console.log('no logger was set');
            }
            function _info(msg, options) 
            {
                //check to see that a logger is set and has a log method
                if (_logger.info)
                    _logger.info(msg, options);
                //if not, default to the console for now
                else
                    console.info('no logger was set');
            }
            function _levelName() 
            { 
                return _logger.name; 
            }
        });

})();