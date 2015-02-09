(function() {
    'use strict';

    angular
        .module('app.details')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/details/:id',
                config: {
                    templateUrl: 'app/details/details.html',
                    controller: 'Details',
                    controllerAs: 'vm',
                    title: 'details',
                }
            }
        ];
    }
})();
