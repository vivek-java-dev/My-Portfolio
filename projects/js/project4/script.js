const questions = [
    {
    question: "Who is the Soccerer Supreme?",
    answers: [
    { text: "Wong", correct: false},
    { text: "Ancient one ", correct: false},
    { text: "Dr. Strange", correct: true},
    { text: "Peter parker", correct: false},
    ]
    },

    {
    question: "What's the name of the thor's weapon?",
    answers: [
    { text: "Bow arrow", correct: false},
    { text: "Storm Breaker", correct: true},
    { text: "Shield", correct: false},
    { text: "Calws", correct: false},
    ]
    },

    {
    question: "Whose villen is Sinister-Six?",
    answers: [
    { text: "Green arrow", correct: false},
    { text: "iron man", correct: false},
    { text: "Daredevil", correct: false},
    { text: "spiderman", correct: true},
    ]
    },

    {
    question: "Who is the fastest man alive?",
    answers: [
    { text: "Flash", correct: true},
    { text: "Blue beetle", correct: false},
    { text: "Superman", correct: false},
    { text: "Spider Gwen", correct: false},
    ]
    }
];

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0 ;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButton.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)

    })
}
function resetState(){
    nextButton.style.display = 'none'
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target
    // const isCorrect = selectedBtn.dataset.correct === ture

    if(selectedBtn.dataset.correct === 'true'){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }

    Array.from(answerButton.children).forEach(button=>{
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

nextButton.addEventListener('click',() => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn()
    }else{
        startQuiz()
    }
})

function handleNextBtn() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }else{
        showScore()
    }
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = 'block'
}

startQuiz()