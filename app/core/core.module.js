(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular Modules
         */
        'ngRoute', 'ngSanitize', 'ngAnimate',
        /*
         * Reusable cross app modules
         */
        'blocks.router'
        
    ]);
})();
