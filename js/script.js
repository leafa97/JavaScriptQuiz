const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')
//random questions
let randomQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

//start game
function startGame() {
    
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//next question
function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
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

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//select answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length < currentQuestionIndex + 1) {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
clearStatusClass(element)
if (correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//timer

//questions
var questions = [
    {
        question: 'What is JavaScript?',
        answers: [
            {text: "A coding language", correct= true },
            {text: "ghjgkjjj", correct= false}
        ]
    },
    {
        question: 'How do you format a function?',
        answers: [
            {
             text: 'A coding language', correct= true },
             {text: "ghjgkjjj", correct= false}
        ]
    },
    {
        question: 'Where is local storage stored?',
        answers: [
            {
             text: 'A coding language', correct= true },
             {text: "ghjgkjjj", correct= false}
        ]
    },
    {
        question: 'What is JavaScript?',
        answers:[
            {
             text: 'A coding language', correct= true },
             {text: "ghjgkjjj", correct= false}
        ]
    }
]

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
