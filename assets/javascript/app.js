var quiz = [{
    question:"How many viewers (on average) does Jeopardy have?",
    choices:["30 million", "10 million", "15 million", "20 million"],
    answer_Index: 0,
    },{
    question:"What is Alex Trebeks full first name?",
    choices:["Alexander", "Alexis", "Pablo", "George"],
    answer_Index: 3,
     },{
    question:"How much is the record of the most money won by a contestant?",
    choices:["1.5 Million Dollars","2.5 Million Dollars", "3 Million Dollars", "1 Million Dollars"],
    answer_Index: 1,
},{
    question:"How many episodes of 'Jeopardy' are shot per day of filming? ",
    choices:[ "5 Episodes", "1 Episode","3 Episodes",  "2 Episodes"],
    answer_Index: 0,
}];

	var userChoice, i=0, number=10, intervalId, right=0, wrong=0;


window.onload = function() {

		loadData(i);
		
  		$("#button1, #button2, #button3, #button4").click(function(){

       	userChoice = $(this).val();
       	stop();

    	if (userChoice==quiz[i].answer_Index) 
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



};

function loadData(i)
{	
	if(i===4)
  	{
  		alert("You got " + right + " correct, and " + wrong + " wrong!");
  		stop();
  	}
	$("#question").html(quiz[i].question);
  	$("#choice1").html(quiz[i].choices[0]);
  	$("#choice2").html(quiz[i].choices[1]);
  	$("#choice3").html(quiz[i].choices[2]);
  	$("#choice4").html(quiz[i].choices[3]);
  	run();
}
  		
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#time").html(number);

      if (number === 0) {
      	alert("Time has run out!");
      	wrong++;
      	i++;
      	$("#question").empty();
    	$("#choice1, #choice2, #choice3, #choice4").empty();
      	loadData(i);
        stop();
      }
    }

    function stop() {
      clearInterval(intervalId);
      number=10;
    }

    setTimeout(loadData, 1000)