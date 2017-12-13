window.onload = function() {
	
	$(document).ready(function() {
      
      var stateCapital = [{nameState: "Florida", answerChoices: ["Miami", "Orlando", "Oviedo", "Talahasse", "Tampa"], goodAnswer:"Orlando"}, {nameState: "Texas", answerChoices: ["Oregon", "Antofagasta", "Douglas", "NewYork", "Londres"], goodAnswer: "Antofagasta"}, {nameState: "California", answerChoices: ["Los Angeles", "San Diego", "Sacramento", "San Jose", "San Francisco"], goodAnswer: "San Diego"}, {nameState: "Colorado", answerChoices: ["Paris", "Roma", "Manchestre", "Quito", "Lima"], goodAnswer: "Paris"}, {nameState: "Arizona", answerChoices: ["Phoneix", "Tucson", "Douglas", "Talahasse", "Tampa"], goodAnswer: "Phoneix"}, {nameState: "Alabama", answerChoices: ["Tennesse", "Rio", "Fortazela", "Manaus", "La Rosita"], goodAnswer: "Fortazela"}];

      
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
	  		$("#mainContainer").addClass("mainContainer2");
	  		reloj()
	  		quentionary();
	  }


	  var intervalId;
	  var secondMeter;

	  var time = 30;

	  function reloj(){
	  		intervalId = setTimeout(buttonDoneFunction, 1000*30)
	  		secondMeter = setTimeout(secondMeterCount, 1000*1)
	  }




	  //buttonStart function. page lay-out
	  function quentionary(){
	  		//var stateName = ("<a>")
			//stateName.text = stateCapital.nameState[0];
			$("#mainContainer").html(mainTittle);
			var display = $("<div>");
			display.text("00:00");
			$("#mainContainer").append(display);

				for (var i = 0; i < 5; i++) {
						var questions = $("<div>");
						questions.text("whas is the Capital of: " + stateCapital[i].nameState);
						$("#mainContainer").append(questions);

						for(var q=0; q<5; q++){
							var answerF = $("<input>");
							answerF.addClass("answerClass");
							answerF.attr("type", "radio")
							answerF.attr("name", "city"+i)
							answerF.attr("value", stateCapital[i].answerChoices[q]);
							answerF.attr("id",stateCapital[i].answerChoices[q]);
							answerF.attr("goodAnswerF", stateCapital[i].goodAnswer);

							$("#mainContainer").append(answerF);

							var answerT = $("<a>");
							answerT.text(stateCapital[i].answerChoices[q]);

							$("#mainContainer").append(answerT);
							$("#mainContainer").append("<br>");							
						}
						$("#mainContainer").append("<hr>")
				}

			var buttonDone = $("<button>");
			buttonDone.text("DONE");
			buttonDone.addClass("buttonDoneClass");

			//send info to HTML
			$("#mainContainer").append(buttonDone);
			$(".buttonDoneClass").click(buttonDoneFunction);

		    

	  }

	  function buttonDoneFunction(){
	  			clearInterval(intervalId);
	  			clearInterval(secondMeter);
		    	console.log("boton done1");
		    	
				var goodAnswerCounter = 0;
				var incorrectAnswerCounter = 0;
		    	for (var i = 0; i < 5; i++) {
					
		 	    	var variable = "input[name=city" + i + "]:checked";


		 	    	var question1 = $(variable).val();

		 	    	console.log(question1);

			    	if (question1 == stateCapital[i].goodAnswer){
			    		goodAnswerCounter = goodAnswerCounter + 1;
			    	}

			    	if (question1 != undefined && question1 != stateCapital[i].goodAnswer){
			    		incorrectAnswerCounter = incorrectAnswerCounter + 1;
			    	}
				}

				//var incorrectAnswerF = 
				var noAnswer = 5 - goodAnswerCounter - incorrectAnswerCounter;

		    	$("#mainContainer").html(mainTittle);
		    	$("#mainContainer").append("<div>All Done</div>");
		    	
		    	$("#mainContainer").append("<div>Correct Answers: </div>" + goodAnswerCounter);
	  			$("#mainContainer").append("<div>Incorrect Answers: </div>" + incorrectAnswerCounter);
	  			$("#mainContainer").append("<div>Unanswered: </div>" + noAnswer);
		  		//setTimeout(getTotalizers, 1000*30)

	  }

	  function secondMeterCount() {

	      // DONE: increment time by 1, remember we cant use "this" here.
	      time--;

	      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
	      //       and save the result in a variable.
	      var converted = timeConverter(time);
	      console.log(converted);

	      // DONE: Use the variable we just created to show the converted time in the "display" div.
	      $("#display").text(converted);
	  }  
	      
	  function timeConverter(t) {

	      var minutes = Math.floor(t / 60);
	      var seconds = t - (minutes * 60);

	      if (seconds < 10) {
	        seconds = "0" + seconds;
	      }

	      if (minutes === 0) {
	        minutes = "00";
	      }
	      else if (minutes < 10) {
	        minutes = "0" + minutes;
	      }

	      return minutes + ":" + seconds;
	  }
	 

	  
	  //$("#bodyshop").append(container2);



	});
	//document
}
//window 