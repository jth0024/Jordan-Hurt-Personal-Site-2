//Jordan Hurt
//Last Modified: 9/11/2014

$(document).ready(function() {
	//Attach the correct style-sheet based on screen dimensions
	if (mobile) {
		$("#style").attr("href","support/css/style.m.css");
	} 
	else {
		$("#style").attr("href","support/css/style.css");
	}
	
	//Hide all display: none elements and change to display: visible for toggling	
	$(".hidden").hide();
	$(".hidden").css("display", "visible");

	//Attach click handlers to social and resume buttons
	$("#social").on("click", function(){
		$("#resume_links").slideUp("fast");
		$("#social_links").slideToggle("fast");
		toggleColor(this);
	});
	$("#resume").on("click", function(){
		$("#social_links").slideUp("fast");
		$("#resume_links").slideToggle("fast");
		toggleColor(this);
	});


//-----------------------Functions------------------


	//Function to toggle color of element and change other elements to gray
	function toggleColor(element) {
		if ($(element).css("color") == "rgb(128, 130, 133)") {
			$(element).css("color", "#03a9f4");
		}
		else {
			$(element).css("color", "#808285");
		}
		if ($(element).attr("id") == "resume") {
			$("#social").css("color", "#808285");
		} 
		else {
			$("#resume").css("color", "#808285");
		}
	}
})

/*Quotes are fun.  I wanted to put a few on the front page, but it seemed ostentatious.  But, since you've decided to take a 
  look at my source code, I figured I'd treat you to a few of my favorite quotes.

  "Is there another word for synonym?" -- George Carlin

  "Simplicity is prerequisite for reliability." -- Edsger Dijkstra

  "It is practically impossible to teach good programming to students that have had a prior 
   exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of 
   regeneration." -- Edsger Dijkstra

  "I'm sick of following my dreams. I'm just going to ask them where they're goin', and 
   hook up with them later." -- Mitch Hedberg


*/
