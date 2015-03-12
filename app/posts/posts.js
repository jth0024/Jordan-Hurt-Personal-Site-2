(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('Posts', Posts);

    function Posts($timeout, $location, $anchorScroll, $sanitize, config, dataservice) {
        var vm = this;
        vm.dateEnd = 10;
        vm.postSnip = 350;
        vm.postEnd = -7;
        vm.postBegin = 154;

        activate();

        function activate() {
            getPosts();
        }


        function getPosts () {
            return dataservice.getPosts().then(function(data) {
                for (var item in data.items) {
                    if(data.items.hasOwnProperty(item)) {
                        //data.items[item].published = data.items[item].published.slice(0, vm.dateEnd);
                        //data.items[item].content = data.items[item].content.slice(vm.postBegin, vm.postEnd);
                        //data.items[item].snippet = data.items[item].content.slice(0, vm.postSnip);

                        data.items[item].published = data.items[item].published.slice(0, vm.dateEnd);
                        data.items[item].content = $sanitize(data.items[item].content);
                        data.items[item].snippet = data.items[item].content.slice(0, vm.postSnip) + "...";                       
                    }
                }
                vm.postList = data;
            });
        }

    }
})();
