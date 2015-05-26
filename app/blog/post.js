(function() {
	'use strict';

	angular
		.module('app.blog')
		.controller('Post', Post);

	function Post($sanitize, post) {
		var vm = this;
		vm.dateEnd = 10;

		activate();

		function activate() {
			cleanPost();
		}


		function cleanPost () {
			var cleanedPost = {
				published: post.published.slice(0, vm.dateEnd),
				title: post.title,
				content: $sanitize(post.content)
			};
			vm.post = cleanedPost;      
		}

	}
})();
