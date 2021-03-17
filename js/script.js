const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')

//random questions
let randomQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

//event listener
document.querySelector("answerButtons").addEventListener("click", function(){

});

var arrayLength = questions.length;
    //start game
function startGame() {
    
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    for (var i = 0; i < arrayLength; i++) {
    console.log(questions[i]);
    
};
    questionContainerElement.classList.remove('hide')

    //timer
var timeLeft = 60;
var interval = setInterval(function(){
    document.getElementById('timer').innerHTML=timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML='Done';

    }
}, 1000);
//set next question
randomQuestions = questions.sort(() => Math.random - 0.5)
currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(randomQuestion[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText= question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}



//questions
var questions = [
    {
        question: "Who invented JavaScript?",
        answer: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "JavaScript can do all of the following except:",
        answer: {
          a: "Read or write to files",
          b: "Create web applications",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "Who invented JavaScript?",
        answer: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "Who invented JavaScript?",
        answer: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      }
];

