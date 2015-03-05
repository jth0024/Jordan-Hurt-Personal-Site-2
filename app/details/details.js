(function() {
    'use strict';

    angular
        .module('app.details')
        .controller('Details', Details);

    //Details.$inject = [];

    function Details($routeParams, $timeout, config, dataservice) {
        var vm = this;

        activate();

        function activate() {
            getDetails();
        }


        function getDetails () {
            return dataservice.getPostDetails($routeParams.id).then(function(data) {
                vm.details = data;
            });
        }
    }
})();
