(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostDetails', PostDetails);

    function PostDetails($routeParams, $timeout, $sanitize, config, dataservice) {
        var vm = this;
        vm.dateEnd = 10;
        vm.postEnd = -7;
        vm.postBegin = 154;

        activate();

        function activate() {
            getDetails();
        }

        function getDetails() {
            return dataservice.getPosts().then(function(data) {
                for (var item in data.items) {
                    if(data.items.hasOwnProperty(item) && data.items[item].id == $routeParams.id) {
                        var details = {
                            published: data.items[item].published.slice(0, vm.dateEnd),
                            title: data.items[item].title,
                            content: $sanitize(data.items[item].content)
                        };
                        vm.details = details;
                    }
                }
            });
        }
    }
})();
