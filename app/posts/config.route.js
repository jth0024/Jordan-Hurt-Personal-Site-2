(function() {
    'use strict';

    angular
        .module('app.posts')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/posts',
                config: {
                    templateUrl: 'app/posts/posts.html',
                    controller: 'Posts',
                    controllerAs: 'vm',
                    title: 'posts',
                }
            }
        ];
    }
})();
