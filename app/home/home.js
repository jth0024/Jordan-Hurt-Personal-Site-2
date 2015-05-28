(function() {
	'use strict';

	angular
		.module('app.home')
		.controller('Home', Home);
		

	function Home($uiViewScroll) {
		var vm = this;
		vm.openForm = openForm;
		vm.cancelForm = cancelForm;
		vm.formIsOpen = false;
		activate();

		function activate() {
			
		}

		function openForm()
		{
			vm.formIsOpen = true;
		}

		function cancelForm()
		{
			vm.formIsOpen = false;
		}
	}
})();
