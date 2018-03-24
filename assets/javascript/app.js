var startButton
var startTime
var timeRemaining
var correctGuesses 
var wrongGuesses
var noAnswer
var audio 
var soundEffects

// questions&answers  
var data = [
    {
    question:" ",
    choices:["choiceOne", "choiceTwo", "choiceThree"],
    correctAnswer: " "},
     {
    question:" ",
    choices:["choiceOne", "choiceTwo", "choiceThree"],
    correctAnswer: " "},
     {
    question:" ",
    choices:["choiceOne", "choiceTwo", "choiceThree"],
    correctAnswer: " "},
     {
    question:" ",
    choices:["choiceOne", "choiceTwo", "choiceThree"],
    correctAnswer: " "},
     {
    question:" ",
    choices:["choiceOne", "choiceTwo", "choiceThree"],
    correctAnswer: " "},
]

// correctAnswer images
var images = [
    "assets/images/ ",
    "assets/images/ ",
    "assets/images/ ",
    "assets/images/ ",
    "assets/images/ ",
]




// display questions&answers
function setQuestion(){
    var currentQuestion = data.question[0]

};



// 1. Jeopardy! averages 25 million viewers per week.

// 2. Alex Trebek’s real first name is George. Alexander is his middle name.

// 3. One week's worth of episodes is shot in one day.
//    To keep up the illusion of passing time, 
//    Trebek changes his suit between shows.

// 4. Jeopardy! holds a record 30 Daytime Emmy Awards.

// 5. The original daytime version debuted on NBC on March 30, 1964, 
//    and aired until January 3, 1975. A weekly nighttime syndicated edition aired 
//    from September 1974 to September 1975, and a revival, The All-New Jeopardy!, 
//    ran on NBC from October 1978 to March 1979.