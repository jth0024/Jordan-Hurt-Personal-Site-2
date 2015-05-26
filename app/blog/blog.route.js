(function() {
	'use strict';

	angular
		.module('app.blog')
		.run(appRun)

	function appRun(routehelper) {
		routehelper.setStates([
			{
				state: 'blog',
				config: {
					resolve: {
						posts:  function(dataservice){
							return dataservice.getBlogPosts();
						}
					},
					url: '/blog',
					templateUrl: 'app/blog/blog.html',
					controller: 'Blog',
					controllerAs: 'vm',
					title: 'Blog',
					data: {
					}              
				}
			},
			{
				state: 'post',
				config: {
					resolve: {
						post:  function(dataservice, $stateParams){
							return dataservice.getBlogPosts().then(function(data) {
								console.log($stateParams.postID);
								for (var item in data.items) {
									if(data.items.hasOwnProperty(item) && data.items[item].id == $stateParams.postID) {
										return data.items[item];
									}
								}
							});
						}
					},
					url: '/blog/:postID',
					templateUrl: 'app/blog/post.html',
					controller: 'Post',
					controllerAs: 'vm',
					title: 'Post',
					data: {
						canGoBack: true
					}              
				}
			}          
		]); 
	}

})();
