
// Audio Files
var themeMusic = new Audio("assets/audio/JeopardyTheme.mp3");
var questionSound = new Audio("assets/audio/questionSet.mp3");
var winSound = new Audio("assets/audio/correct.mp3");
var wrongSound = new Audio ("assets/audio/wrong.mp3");

var quiz = [{
    question:"How many viewers (on average) does Jeopardy have?",
    choices:["30 million", "10 million", "15 million", "20 million"],
    answerIndex:0,
    },{
    question:"What is Alex Trebeks full first name?",
    choices:["Alexander", "Alexis", "Pablo", "George"],
    answerIndex:3,
     },{
    question:"How much is the record of the most money won by a contestant?",
    choices:["1.5 Million Dollars","2.5 Million Dollars", "3 Million Dollars", "1 Million Dollars"],
    answerIndex:1,
},{
    question:"How many episodes of 'Jeopardy' are shot per day of filming? ",
    choices:[ "5 Episodes", "1 Episode","3 Episodes",  "2 Episodes"],
    answerIndex:0,
}]

var userChoice
var i = 0
var intervalId 
var right = 0
var wrong = 0
var rightDiv = $("#rightDiv")
var wrongDiv = $("#wrongDiv")
var countdown = 11

$(document).ready(function() {

    // change background and display timer on click of jumbotron
    $(".jumbotron").click(function(){
        $(this).css('background-image', 'url(assets/images/jeopardyfluid.png)');
        $("#timer").html('<p>Time Remaining : '+ 10  + '</p>');
        $(this).attr("class","fluid mt-5");
        decrement(); run(); loadData(i);
     
	});
	
	$("#button1, #button2, #button3, #button4").click(function(){

		userChoice = $(this).index();
		stop();

	 if (userChoice === quiz[i].answerIndex) 
		 {
			 alert("Correct!");
			 i++;
			 right++;
			 $("#question").empty();
			 $("#choice1, #choice2, #choice3, #choice4").empty();
			 loadData(i);
		 }
	 
	 else{
			 alert("Wrong!");
			 i++;
			 wrong++;
			 $("#question").empty();
			 $("#choice1, #choice2, #choice3, #choice4").empty();
			 loadData(i);    		
		 }
	 });

});

 function loadData(i){

	 $("#question").html(quiz[i].question)
	 $("#choice1").html(quiz[i].choices[0])
	 $("#choice2").html(quiz[i].choices[1])
	 $("#choice3").html(quiz[i].choices[2])
	 $("#choice4").html(quiz[i].choices[3])
	 run();
	 
	if(i===4){
		alert("You got " + right + " correct, and " + wrong + " wrong!");
		stop(); endGame();
	}
 }




// Set interval for timer
function run(){
    intervalId = setInterval(decrement, 1000)
}

// Countdown for timer 
function decrement(){

	countdown -- ;
	
    $("#timer").html("Time Remaining : " + countdown);

        if (countdown === 0){
            alert("Time has run out!");
			wrong++;
			i++;
			$("#question").empty();
		  	$("#choice1, #choice2, #choice3, #choice4").empty();
			stop();
			$("#timer").html('Time Remaining : ' + countdown );
			loadData(i);
    }
}
// clear timer
function stop() {
    clearInterval(intervalId);
    countdown=10;
  }

  function endGame(){
	  rightDiv.html("Correct Answers :" + right);
	  wrongDiv.html("Wrong Answers :" + wrong);
	  if (countdown < 0){
		  $("#timer").html('Time Remaining : 0 ');
	  }

  }