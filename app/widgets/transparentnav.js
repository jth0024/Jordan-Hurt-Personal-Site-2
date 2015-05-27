(function() {
	'use strict';

	angular
		.module('app.widgets')
		.directive('jTransparentNav', jTransparentNav);

	function jTransparentNav() {
		return {
			link: setScrollFire,
		};
	}

	function setScrollFire($scope, $elem, $attr)
	{
		var scroll = 0;
		$(window).on("scroll", function() {
			if($(window).scrollTop() > 64 && $(window).scrollTop() > scroll) {
				/*$(".navbar-fixed").css("opacity", 0.8);
				$(".side-nav").css("opacity", 1.0);*/
				$("nav").removeClass("no-shadow");
				$(".navbar-fixed").children("nav").css("height", "35px");
				$(".navbar-fixed").find(".nav-wrapper").css({"lineHeight": "35px", "height": "35px"});
				$(".navbar-fixed").find(".mdi-navigation-menu").css({"lineHeight": "35px", "height": "35px"});
			}
			else {
				if($(window).scrollTop() > 64) {
					$("nav").removeClass("no-shadow");
				}
				else {
					$("nav").addClass("no-shadow");
				}
				//$(".navbar-fixed").css("opacity", 1.0);
				$(".navbar-fixed").children("nav").css("height", "64px");
				$(".navbar-fixed").find(".nav-wrapper").css({"lineHeight": "64px", "height": "64px"});
				$(".navbar-fixed").find(".mdi-navigation-menu").css({"lineHeight": "64px", "height": "64px"});
			}
			scroll = $(window).scrollTop();
		});
		
	}


})();
