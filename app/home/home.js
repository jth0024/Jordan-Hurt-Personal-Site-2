(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);
        

    function Home($uiViewScroll) {
        var vm = this;
        vm.scrollStart = scrollStart;
        activate();

        function activate() {
            
        }

        function scrollStart()
        {
            $uiViewScroll($("#about"));
        }

    }
})();
