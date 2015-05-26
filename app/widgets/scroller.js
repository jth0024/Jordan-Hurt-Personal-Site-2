(function() {
	'use strict';

	angular
		.module('app.widgets')
		.directive('jScroller', jScroller);

	function jScroller() {
		return {
			link: scrollTo,
			scope: {
				target: '@'
			}
		};
	}

	function scrollTo($scope, $elem, $attr)
	{
		$elem.bind('click', function() {
			var top = $("#" + $attr.target).offset().top - $("#topnav").height();
			$('html, body').animate({
				scrollTop: top
			}, 800);
			return false;
		});
	}
})();
