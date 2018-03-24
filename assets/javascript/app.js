var startButton
var startTime
var counter = setInterval(timer, 1000);
var correctGuesses 
var wrongGuesses
var noAnswer
var interval

// Audio Files
var themeMusic = new Audio("assets/audio/JeopardyTheme.mp3");
var questionSound = new Audio("assets/audio/questionSet.mp3");
var winSound = new Audio("assets/audio/correct.mp3");
var wrongSound = new Audio ("assets/audio/wrong.mp3");

// images
var images = [
    "assets/images/opening.gif",
    "assets/images/correctAnswer.gif",
    "assets/images/question1.jpg",
    "assets/images/question2.jpg",
    "assets/images/question3.jpg",
    "assets/images/question4.jpg",
    "assets/images/question5.jpg",
]

// questions&answers  
var data = [
    {
    question:"How many viewers (on average) does Jeopardy have?",
    choices:["10 million", "15 million", "30 million"],
    correctAnswer: "25 million"},
     {
    question:"What is Alex Trebeks full first name?",
    choices:["Alexander", "Alexis", "Pablo"],
    correctAnswer: "George"},
     {
    question:"How many episodes are shot in one day of filming the show?",
    choices:["3 Episodes", "2 Episodes", "7 episodes"],
    correctAnswer: "5 episodes"},
     {
    question:"How many Daytime Emmy awards has Jeopardy won?",
    choices:["10", "43", "21"],
    correctAnswer: "30"},
     {
    question:"How much is the record of the most money won by a contestant?",
    choices:["1.5 Million Dollars", "3 Million Dollars", "1 Million Dollars"],
    correctAnswer: "2.5 Million Dollars"}
];

$(document).ready(function() {
    // change background and display timer on click of jumbotron
    $(".jumbotron").click(function(){
        console.log("clicked");
        $(this).css('background-image', 'url(assets/images/jeopardyfluid.png)');
        $("#timeRemaining").html('<p>Time Remaining : '+ 15  + '</p>');
        $(this).attr("class","fluid");

        // timer
        var counter = 15;
    setInterval(function(){
     $("#timeRemaining").html('<p>Time Remaining : '+ counter  + '</p>');
      counter--
      if (counter === 0) {
        location.reload();
      }
    }, 1000);


    // display question&choices
    function displayQuestion(){
        $("#trivaQuestion").html("<h2>" + data[0].question + "</h2>");
    }
    displayQuestion();

    function displayChoices(){
        $("#selectAnswer").append("<h4>" + data[0].choices[0] + "</h4>");
        $("#selectAnswer").append("<h4>" + data[0].choices[1] + "</h4>");
        $("#selectAnswer").append("<h4>" + data[0].choices[2] + "</h4>");
        $("#selectAnswer").append("<h4>" + data[0].correctAnswer + "</h4>");
    }
    displayChoices();
    })

    $(data[0].choices[0]).click(function(){
    $("#imageHolder").html("<img src =' " + images[4] + "' height='300' /> ");
    })



    // $("#imageHolder").html("<img src =' " + images[4] + "' height='300' /> ");


// display questions&answers
function setQuestion(){
    var currentQuestion = data.question[0]

};


});