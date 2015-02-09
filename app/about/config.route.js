(function() {
    'use strict';

    angular
        .module('app.about')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/about/about.html',
                    controller: 'About',
                    controllerAs: 'vm',
                    title: 'about',
                }
            }
        ];
    }
})();
