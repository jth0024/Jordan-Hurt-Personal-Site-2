(function() {
    'use strict';

    angular
        .module('app.about')
        .controller('About', About);
        

    function About($timeout, $location, $anchorScroll, config, dataservice) {
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
