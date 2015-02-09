(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Topnav', Topnav);

    function Topnav($route, $location, $anchorScroll, routehelper) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Jordan Hurt';
        vm.navbarToggle = false;
        vm.toggleVisibility = toggleVisibility;
        vm.scrollTo = scrollTo;

        function toggleVisibility(event) {
            if (vm.navbarToggle == event.target.id) {
                vm.navbarToggle = false;
            }
            else
            {
                vm.navbarToggle = event.target.id;
            }
        }

        function scrollTo(id) {
            $location.hash(id);
            $anchorScroll();
        }
    }
})();
