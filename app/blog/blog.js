(function() {
	'use strict';

	angular
		.module('app.blog')
		.controller('Blog', Blog);

	function Blog($sanitize, posts) {
		var vm = this;
		vm.dateEnd = 10;
		vm.postSnip = 350;
		vm.postEnd = -7;
		vm.postBegin = 154;

		activate();

		function activate() {
			cleanPosts();
		}


		function cleanPosts () {
			for (var item in posts.items) {
				if(posts.items.hasOwnProperty(item)) {
					posts.items[item].published = posts.items[item].published.slice(0, vm.dateEnd);
					posts.items[item].content = $sanitize(posts.items[item].content);
					posts.items[item].snippet = posts.items[item].content.slice(0, vm.postSnip) + "...";                       
				}
			}
			vm.posts = posts;         
		}

	}
})();
