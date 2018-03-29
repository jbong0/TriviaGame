
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
	answerIndex: 0,
}]

var userChoice
var timer = $("#timer")
var results = $("#results")
var i = 0
var intervalId 
var right = 0
var wrong = 0
var countdown = 11
var results = $("#showResults")


$(document).ready(function() {
results.hide()

    // change background and display timer on click of jumbotron
    $(".jumbotron").click(function(){
        $(this).css('background-image', 'url(assets/images/jeopardyfluid.png)');
        timer.html('<p>Time Remaining : '+ 10  + '</p>');
		$(this).attr("class","fluid mt-5");
		loadData(i); 
	});

	$("#button1, #button2, #button3, #button4").click(function(){

		userChoice = $(this).index();
		stop();

	 if (userChoice === quiz[i].answerIndex) 
		 {	 
			 right++; 
			 winSound.play()
			 i++;
			 setTimeout(function(){ console.log("Correct!"); }, 1000)
			 $("#question").empty()
			 $("#choice1, #choice2, #choice3, #choice4").empty()
			 
			 loadData(i)
			 stop();
		 }
	 
	 else{
			wrong++;
			wrongSound.play() 
			i++;
			setTimeout(function(){ console.log("Wrong!"); }, 1000)
			$("#question").empty();
			$("#choice1, #choice2, #choice3, #choice4").empty();
			
			loadData(i);    
			stop();	
		 }
	 });



 function loadData(i){

	if (i===4){
		timer.html("<p id='replay'> Click To Replay </p>")
		$("#replay").click(function(){location.reload()})
		console.log("You got " + right + " correct, and " + wrong + " wrong!")
		keepScore(); $("#selectAnswer").empty();  results.show()
	
		
		
	}

	
	 $("#question").html(quiz[i].question)
	 $("#choice1").html(quiz[i].choices[0])
	 $("#choice2").html(quiz[i].choices[1])
	 $("#choice3").html(quiz[i].choices[2])
	 $("#choice4").html(quiz[i].choices[3])
	 keepScore()
	 run()
 }



// Set interval for timer
function run(){
    intervalId = setInterval(decrement, 1000)
}

// Countdown for timer 
function decrement(){
	timer.html('<p>Time Remaining : '+ 10  + '</p>');

	countdown -- ;
	
    timer.html("Time Remaining : " + countdown);

        if (countdown === 0){
			wrong++;
			i++;
			wrongSound.play() 
			setTimeout(function(){ console.log("Time has run out!"); }, 1000);
			$("#question").empty();
		  	$("#choice1, #choice2, #choice3, #choice4").empty();
			timer.html('Time Remaining : ' + "0" );
			loadData(i); 
			stop();
			timer.html("Time Up!")
	} else if ( countdown < 0){
		timer.html('Time Remaining : ' + "0" );
		timer.html("<p id='replay'> Click To Replay </p>")
		$("#replay").click(function(){location.reload()})

	}
	
}
// clear timer
function stop() {
    clearInterval(intervalId);
	countdown = 11;
	if(i===4){
	console.log(right)
	console.log(wrong)
			keepScore();
			
  }
}

  function keepScore(){
	  var numCorrect = right
	  var numWrong = wrong
	$("#rightDiv").html("Correct Answers : " + numCorrect);
	$("#wrongDiv").html("Wrong Answers : " + numWrong);
  }
  
});

// Styling

	// Audio
	var isPlaying = false;
	function togglePlay() {
		if (isPlaying) {
		myAudio.pause()
			} else {
			myAudio.play();
			}
			};
			myAudio.onplaying = function() {
				isPlaying = true;
				$('#music').html("Music &#128266;")
				};
			myAudio.onpause = function() {
				isPlaying = false;
				$('#music').html("Music &#128263;")
	};

	// mouse effects
	$('.btn-block').mouseover(function(event) {
	$(event.target).addClass('outlineElement');
	})
	$('.btn-block').mouseout(function(event) {
	$(event.target).removeClass('outlineElement')
	})
