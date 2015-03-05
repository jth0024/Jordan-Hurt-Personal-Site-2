(function() {
    'use strict';

    angular
        .module('app.work')
        .controller('Work', Work);

    //Resume.$inject = [];

    function Work($timeout, $location, $anchorScroll, config, dataservice) {
        var vm = this;

        activate();

        function activate() {
            getProjects();
        }


        function getProjects () {
            return dataservice.getProjects().then(function(data) {
                vm.projects = data;
            });
        }

    }
})();
