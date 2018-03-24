var startButton
var startTime
var timeRemaining
var correctGuesses 
var wrongGuesses
var noAnswer

// Audio Files
var themeMusic = new Audio("../audio/JeopardyTheme.mp3");
var questionSound = new Audio("../audio/questionSet.mp3");
var winSound = new Audio("../audio/correct.mp3");
var wrongSound = new Audio ("../audio/wrong.mp3");

// images
var images = [
    "../images/opening.gif",
    "../images/correctAnswer.gif",
    "../images/question1.jpg",
    "../images/question2.jpg",
    "../images/question3.jpg",
    "../images/question4.jpg",
    "../images/question5.jpg",
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
]

// display questions&answers
function setQuestion(){
    var currentQuestion = data.question[0]
};
