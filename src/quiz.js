const questions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: 1
  },
  {
    question: "Which tag is used to create a button in HTML?",
    options: ["<div>", "<input>", "<button>", "<span>"],
    correctAnswer: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "**", "##"],
    correctAnswer: 1
  },
  {
    question: "Which method is used to print in console?",
    options: ["print()", "console.log()", "log()", "write()"],
    correctAnswer: 1
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Bootstrap"],
    correctAnswer: 2
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    correctAnswer: 0
  },
  {
    question: "Which HTML tag is used for images?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    correctAnswer: 1
  },
  {
    question: "Which operator is used to compare value and type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-style", "background", "color", "text-align"],
    correctAnswer: 2
  },
  {
    question: "Which keyword is used to create a function in JS?",
    options: ["method", "function", "def", "fun"],
    correctAnswer: 1
  }
];



let currentIndex = 0;
let score = 0;

const nextBtn = document.getElementById("next-btn")
function showQuestion() {
  document.getElementById("question-count").innerText=currentIndex + 1
  nextBtn.disabled = true;
  if (nextBtn.disabled === true) {
    nextBtn.style.cursor = 'not-allowed'
    nextBtn.style.backgroundColor='gray'
  }
  const currentQuestion = questions[currentIndex]

  document.getElementById("question").innerText = currentQuestion.question

  const optionBox = document.getElementById("options")
  optionBox.innerHTML = ''


  currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement("button")
    btn.innerText = option
    btn.classList = 'btn'

    btn.onclick = () => checkAnswer(index, btn)

    optionBox.appendChild(btn)
  })

}







function checkAnswer(selectIndex, btn) {
  const correctIndex = questions[currentIndex].correctAnswer;
  if (selectIndex === correctIndex) {
    btn.style.backgroundColor = 'green'
    btn.style.color = 'white'
    score++
    console.log(score)
  }
  else {
    btn.style.backgroundColor = 'red'
  }

  const buttons = document.querySelectorAll("#options button")
  buttons.forEach(button => {
    button.disabled = true
    button.style.cursor = "not-allowed";
    button.style.color = 'white'
  })

  nextBtn.disabled = false;
  nextBtn.style.cursor = 'pointer'
  nextBtn.style.backgroundColor='green'

}




function resetQuiz() {
  currentIndex = 0;
  score = 0
  nextBtn.disabled = true;
  nextBtn.style.cursor = 'not-allowed'

  document.getElementById("question").innerText = ''
  document.getElementById("options").innerHTML = ''

}




document.getElementById("next-btn").addEventListener("click", function () {
  currentIndex++
  if (currentIndex < questions.length) {
    showQuestion()
  }
  else {
    showScore()
  }
})



function showScore() {
  hide("quiz-page")
  show("score-page")

  document.getElementById("score-count").innerText = `
  ${score}/${questions.length}
  `
}





function hide(id) {
  document.getElementById(id).style.display = 'none'
}
function show(id) {
  document.getElementById(id).style.display = 'block'
}


document.getElementById("start-btn").addEventListener("click", function () {
  hide("home-page")
  show("quiz-page")
  showQuestion()
})
document.getElementById("go-home").addEventListener("click", function () {
  hide("score-page")
  hide("quiz-page")
  show("home-page")

  resetQuiz()
  showQuestion()
})
document.getElementById("paly-again").addEventListener("click", function () {
  hide('score-page')
  hide("home-page")
  show('quiz-page')
  resetQuiz()
  showQuestion()
})