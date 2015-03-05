(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('Posts', Posts);

    //Resume.$inject = [];

    function Posts($timeout, $location, $anchorScroll, config, dataservice) {
        var vm = this;

        activate();

        function activate() {
            getPosts();
        }


        function getPosts () {
            return dataservice.getPosts().then(function(data) {
                vm.posts = data;
            });
        }

    }
})();
