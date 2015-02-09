(function() {
    'use strict';

    angular
        .module('app.resume')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/resume',
                config: {
                    templateUrl: 'app/resume/resume.html',
                    controller: 'Resume',
                    controllerAs: 'vm',
                    title: 'resume',
                }
            }
        ];
    }
})();
