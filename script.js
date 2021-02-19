var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var quizQuestions  = [
    {
        question: "Which comparisson operator is used to symbolize 'equal to'?",
        answerChoices: {
            a: "!=",
            b: ">",
            c: "==",
            d: "<"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the DOM?",
        answerChoices: {
            a: "Double Operating Model",
            b: "Dont Open More",
            c: "Dot Oval Mark",
            d: "Document Object Model"
        },
        correctAnswer: "d"
    },
    {
        question: "True or False? The assignment operator assigns a value to a variable.",
        answerChoices: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "Which operator is used to find the modulus or remander?",
        answerChoices: {
            a: "=",
            b: "%",
            c: "**",
            d: "--"
        },
        correctAnswer: "b"
    }
];

function buildQuiz(){
    var output = [];
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
    
    var answerChoices = [];
    for(letter in currentQuestion.answerChoices){
        answerChoices.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answerChoices[letter]}
            </label>`
        );
    }
    output.push(
        `<div class="question"> ${currentQuestion.quizQuestions} </div>
        <div class="answerChoices"> ${answerChoices.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

quizQuestions.forEach(
    (currentQuestion, questionNumber) => {
});

 
function showResults(){
    var answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;

    quizQuestions.forEach( (currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        
        var userAnswer = (answerContainer.querySelector(selector) || {}).value; 
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

buildQuiz();



submitButton.addEventListener('click', showResults);







var questionCounter = 0; 
  var selections = []; 
 
  


//buttons and score variables.
var button = document.getElementById("start");
var userScore = document.getElementById("score");
var startTimer = 45;


//this is the timer for the quiz
function timer(){
    var countdown = setInterval(function(){
        userScore.textContent = startTimer;
        startTimer--;
        console.log(startTimer)
        // if startTimer is less then 0, we reset to 0. 
        if (startTimer <= 0){
            clearInterval(countdown);
            startTimer = 0;

            alert("You're time is up!");
        }
        // stop timer
    }, 100);
};

function restart() {
    // We need to reset the startTimer counter
    startTimer = 45;
    // clear data on page
}

button.addEventListener("click", function() {
    timer()
    // The timer function
    // console.log(startTimer)

    
})