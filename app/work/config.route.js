(function() {
    'use strict';

    angular
        .module('app.work')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/work',
                config: {
                    templateUrl: 'app/work/work.html',
                    controller: 'Work',
                    controllerAs: 'vm',
                    title: 'work',
                }
            }
        ];
    }
})();
