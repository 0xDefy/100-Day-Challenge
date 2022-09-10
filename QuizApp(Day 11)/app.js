// create Quiz class
class Quiz {
    constructor(questions) {
        this.score = 0
        this.questions = questions
        this.questionIndex = 0
    }
    getQuestionIndex () {
        return this.questions[this.questionIndex]
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

    isEnded() {
        return this.questionIndex === this.questions.length
    }
}

// create a question class
class Question {
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }
    isCorrectAnswer(choice) {
        return this.answer === choice
    }
}

//show scores
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizEl = document.getElementById('quiz')
    quizEl.innerHTML = quizEndHTML
}

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// create questions here!!

let questions = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
    ),
    new Question(
        "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"
    ),
    new Question(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"
    ),
    new Question(
        "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"
    ),
    new Question(
        "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"
    )
];

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

//display questions
function displayQuestion() {
    if(quiz.isEnded()) {
        showScores()
    } else {
        let questionEl = document.getElementById("question")
        questionEl.innerHTML = quiz.getQuestionIndex().text

        let choices  = quiz.getQuestionIndex().choices
        for(let i=0; i< choices.length; i++) {
            let choiceEl = document.getElementById("choice" + i)
            choiceEl.innerHTML = choices[i]
            guess("btn" + i, choices[i])
        }
        showProgress()
    }
}

//init quiz
let quiz = new Quiz(questions)

//display questions
displayQuestion()


// Show Timer!!

let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();