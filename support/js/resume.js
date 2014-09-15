$(document).ready(function(){
	if (mobile) {
		$("#style").attr("href","support/css/style.m.css");
	} 
	else {
		$("#style").attr("href","support/css/style.css");
	}	
});
