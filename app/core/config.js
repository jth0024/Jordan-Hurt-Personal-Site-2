(function() {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix: '[NG-Jordan Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Jordan Hurt',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    //configure.$inject = ['$logProvider', '$routeProvider', 'routehelperConfigProvider'];

    function configure ($logProvider, $routeProvider, routehelperConfigProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        routehelperConfigProvider.config.docTitle = 'Jordan-Hurt: ';
        var resolveAlways = { /* @ngInject */
            //ready: function(dataservice) {
            //    return dataservice.ready();
            //}
             ready: ['dataservice', function (dataservice) {
                return dataservice.ready();
             }]
        };
        //resolveAlways.$inject = ['dataservice'];
        routehelperConfigProvider.config.resolveAlways = resolveAlways;

        // Configure the common exception handler
        //exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
    //configure.$inject = ['$logProvider', '$routeProvider', 'routehelperConfigProvider'];

})();
