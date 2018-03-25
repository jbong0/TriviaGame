
// Audio Files
var themeMusic = new Audio("assets/audio/JeopardyTheme.mp3");
var questionSound = new Audio("assets/audio/questionSet.mp3");
var winSound = new Audio("assets/audio/correct.mp3");
var wrongSound = new Audio ("assets/audio/wrong.mp3");

var questions = [{
    question:"How many viewers (on average) does Jeopardy have?",
    choices:["10 million", "15 million", "30 million", "25 million"],
    correctAnswer: 3
    },{
    question:"What is Alex Trebeks full first name?",
    choices:["Alexander","George", "Alexis", "Pablo"],
    correctAnswer: 1
     },{
    question:"How much is the record of the most money won by a contestant?",
    choices:["2.5 Million Dollars","1.5 Million Dollars", "3 Million Dollars", "1 Million Dollars"],
    correctAnswer: 0
}];

var currentQuestion = 0;


$(document).ready(function() {
    //  themeMusic.play();

    // change background and display timer on click of jumbotron
    $(".jumbotron").click(function(){
        console.log("clicked");
        $(this).css('background-image', 'url(assets/images/jeopardyfluid.png)');
        $("#timeRemaining").html('<p>Time Remaining : '+ 10  + '</p>');
        $(this).attr("class","fluid mt-5");
        showTimer();
        showCurrentQuestion();
        $("jumbotron").off("click", ".jumbotron");
    })

    // timer
     function showTimer(){   
     counter = 9;
     timer = setInterval(function(){
     $("#timeRemaining").html('<p>Time Remaining : '+ counter  + '</p>');
      counter--;
      if (counter === -1) {
        clearInterval(timer);
      }
    }, 1000)
}
    // display question
    function showCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $("#triviaQuestion");
    var choices = $("#selectAnswer");
    var numberChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    var choice;
    for (i = 0; i < numberChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $("<h4>"  +  choice + "</h4>").appendTo(choices);
    }
    }


//   // question 1
//     function displayQuestion1(){
//         $("#trivaQuestion").append("<h2>" + questions[0].question + "</h2>");
//         $("#selectAnswer").append("<li>" + questions[0].choices[0] + "</li>");
//         $("#selectAnswer").append("<li>" + questions[0].choices[1] + "</li>");
//         $("#selectAnswer").append("<li>" + questions[0].choices[2] + "</li>");
//         $("#selectAnswer").append("<li><div id='correct'>" + questions[0].correctAnswer + "</li></div>");
//     }
//     // displayQuestion1();

//     // question 2
//     function displayQuestion2(){
//         $("#trivaQuestion").append("<h2>" + questions[1].question + "</h2>");
//         $("#selectAnswer").append("<h4>" + questions[1].choices[0] + "</h4>");
//         $("#selectAnswer").append("<h4>" + questions[1].correctAnswer + "</h4>");
//         $("#selectAnswer").append("<h4>" + questions[1].choices[1] + "</h4>");
//         $("#selectAnswer").append("<h4>" + questions[1].choices[2] + "</h4>");

//     }
//     // displayQuestion2();

//     // question 3
//     function displayQuestion3(){
//         $("#trivaQuestion").append("<h2>" + questions[2].question + "</h2>");
//         $("#selectAnswer").append("<h4>" + questions[2].choices[0] + "</h4>");
//         $("#selectAnswer").append("<h4>" + questions[2].choices[1] + "</h4>");
//         $("#selectAnswer").append("<h4>" + questions[2].correctAnswer + "</h4>");
//         $("#selectAnswer").append("<h4>" + questions[2].choices[2] + "</h4>");
       
//     }
//     // displayQuestion3();


    })



