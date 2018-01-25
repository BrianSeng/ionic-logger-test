(function() 
{
    'use strict';
    
    var factory = 'Logger';
    angular.module('app.logger')

    .factory(factory, function(LogLvl) {
        var Logger = function()
        {
            this.level = LogLvl.levels[0]; // pull from SettingsSvc --> _.findWhere(LogLvl.levels, { name: SettingsSvc.logLevel })
        }
        Logger.prototype = {
            // set logging strategy
            setLogLevel: function (lvl) {
                this.level = _.findWhere(LogLvl.levels, { name: lvl });
            }
            , log: function(msg, opts){
                this.level.svc.log(msg, opts);
            }
            , registerLogLvl: function(newLogLvl)
            {
                LogLvl.levels.push(newLogLvl);
            }
        }
        
        return Logger;
    });

})();