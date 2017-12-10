window.onload = function() {
	
	$(document).ready(function() {
      
      var stateCapital = [{nameState: "Florida", answerChoices: ["Miami", "Orlando", "Oviedo", "Talahasse", "Tampa"], goodAnswer: 3}, {nameState: "Texas", answerChoices: ["Miami", "Orlando", "Oviedo", "Talahasse", "Tampa"], goodAnswer: 1}, {nameState: "California", answerChoices: ["Los Angeles", "San Diego", "Sacramento", "San Jose", "San Francisco"], goodAnswer: 3}, {nameState: "Colorado", answerChoices: ["Miami", "Orlando", "Oviedo", "Talahasse", "Denver"], goodAnswer: 4}, {nameState: "Arizona", answerChoices: ["Phoneix", "Tucson", "Douglas", "Talahasse", "Tampa"], goodAnswer: 0}, {nameState: "Alabama", answerChoices: ["Tennesse", "Orlando", "Oviedo", "Talahasse", "Tampa"], goodAnswer: 2}];

      
	  //start game
	  //container initial page
      var container1 = $("<div>");
      mainContainerClass = "mainContainer"
      container1.attr("id", mainContainerClass);
	  container1.addClass("container1");

	  //tittle initial page
	  var mainTittle = $("<div>");
	  mainTittle.text("SUPER TRIVIUM");
	  mainTittle.addClass("mainTittleClass");

	  //startButton initial page
	  var buttonStart = $("<button>");
	  buttonStart.text("START");
	  buttonStart.addClass("buttonStartClass");	  

   	  //send info to HTML
   	  $("#bodyshop").append(container1);
	  $("#mainContainer").append(mainTittle);
	  $("#mainContainer").append(buttonStart);

	  //start button Function
	  $(".buttonStartClass").click(buttonStartFunction);

	  function buttonStartFunction(){
	  		$("#mainContainer").height(600);
	  		//setTimeout(getTotalizers, 1000*30)
	  		quentionary();
	  }

	  




	  function getTotalizers(){
		    $("#bodyshop").append(container1);
		    $("#mainContainer").append(mainTittle);
		    $("#mainContainer").append("All Done");
		    $("#mainContainer").append("Correct Answers: " + correctAnswer);
	  		$("#mainContainer").append("Incorrect Answers: " + incorrectAnswer);
	  		$("#mainContainer").append("Unanswered: " + unAnswer);
	  }

	  //buttonStart function. page lay-out
	  function quentionary(){
	  		//var stateName = ("<a>")
			//stateName.text = stateCapital.nameState[0];
			$("#mainContainer").html(mainTittle);
				for (var i = 0; i < 5; i++) {
						var questions = $("<div>");
						questions.text("whas is the Capital of: " + stateCapital[i].nameState);
						$("#mainContainer").append(questions);

						for(var q=0; q<5; q++){
							var answerF = $("<a>");
							answerF.text(stateCapital[i].answerChoices[q]);
							$("#mainContainer").append(answerF);
						}
				}
	  }


	  //$("#bodyshop").append(container2);

	});
	//document
}
//window 