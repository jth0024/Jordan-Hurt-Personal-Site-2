(function() {
	'use strict';

	angular
		.module('app.portfolio')
		.run(appRun)

	function appRun(routehelper) {
		routehelper.setStates([
			{
				state: 'portfolio',
				config: {

					url: '/portfolio',
					templateUrl: 'app/portfolio/portfolio.html',
					controller: 'Portfolio',
					controllerAs: 'vm',
					title: 'Portfolio',
					data: {
					}              
				}
			}        
		]); 
	}

})();
