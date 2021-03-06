(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataservice', dataservice);

	function dataservice($http, mockserver) {

		var service = {
			getBlogPosts: getBlogPosts,
			sendQuoteData: sendQuoteData
		};

		return service;



		function sendPostRequest(message, url) {
			message = JSON.stringify(message);
			console.log("MESSAGE:");
			console.log(message);
			return $http({
					method: 'POST',
					url: url,
					data: "message=" + message,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
				.then(function(response) {
					console.log(response);
					return response.data;
				});    
		}

		function sendGetRequest(url) {
			return $http({
				method: 'GET',
				url: url,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.then(function(response) {
				return response.data;
			});
			/*$http.get(url).then(function(response) {
				return response.data;
			})*/
		}

		function getBlogPosts() {
			var url = 'https://www.googleapis.com/blogger/v3/blogs/7831823033313363717/posts?key=AIzaSyBntQw8Opl1Zu6vIB1pgAmaqHdpd5RiYtI';
			return sendGetRequest(url);
		}

		function sendQuoteData(data) {
			var url = '../php/index.php';
            var message = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                telephone: data.telephone,
                comments: data.comments
            };
            console.log(message);
			/*return $http({
				method: 'POST',
				url: url,
				data: "message=" + message,
			})*/
			return sendPostRequest(message, url);
		}


	}
})();
