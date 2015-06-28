(function() {
	'use strict';

	angular
		.module('app.home')
		.controller('Home', Home);
		

	function Home(dataservice) {
		var vm = this;
		vm.openForm = openForm;
		vm.cancelForm = cancelForm;
		vm.submitForm = submitForm;
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

		function submitForm(formData)
		{
			dataservice.sendQuoteData(formData).then(function(response) {
				if(response.error == 'true') {
					Materialize.toast('<div class="red-text text-darken-1">Error: Missing info!</div>', 2000);
				}
				else {
					vm.formIsOpen = false;
					Materialize.toast('<div class="teal-text text-accent-3">Sent request!</div>', 2000);
				}
			});
		}
	}
})();
