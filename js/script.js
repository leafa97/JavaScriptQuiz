const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const answerButtonsElement = document.getElementById('answerButtons')

const questionElement = document.getElementById('question')


//random questions
let randomQuestion, currentQuestionIndex


startButton.addEventListener('click', startGame)


//questions
var questions = [
    {
        question: "Who invented JavaScript?",
        answer: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich",
          d: "Thomas Edison"
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
    //timer
    var timeLeft = 60;
    var interval = setInterval(function(){
        document.getElementById('timer').innerHTML=timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML='Times up!';
    
        }
    }, 1000);
var arrayLength = questions.length;

    //start game
function startGame() {
    
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    for (var i = 0; i < arrayLength; i++) {
    questions[i]
    
}
    questionContainerElement.classList.remove('hide')
    questionContainerElement.append(questions[0].question);
    answerButtonsElement.append(answer[0].answerButtonsElement);




function showQuestion(question) {
    questionElement.innerText= question.question
    questions.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.addEventListener('click', function(evt) {
            console.log('clicked the button')
        })
        answerButtonsElement.appendChild(button)
    })
}

//answer clicked
function answerPicked() {
    document.getElementById("answerClicked").innerHTML = "You clicked me!";
    //event listener
document.getElementById("answerClicked").addEventListener("click" , answerPicked);
    setNextQuestion
}

//set next question
function setNextQuestion() {
    showQuestion(randomQuestion[currentQuestionIndex])

randomQuestion = questions.sort(() => Math.random - 0.5)
currentQuestionIndex = 0
    setNextQuestion()
}
}


