(function() 
{
    'use strict';
    
    var service = 'LogLvl';
    angular.module('app.logger')

    .service(service, function(IonLogSvc, FirebaseLogSvc) {
        var self = this;

        self.levels = [ 
            { name: "error", svc: FirebaseLogSvc }
            , { name: "info", svc: IonLogSvc }
            , { name: "log", svc: IonLogSvc }
            , { name: "quiet", svc: null }
        ]
    });

})();