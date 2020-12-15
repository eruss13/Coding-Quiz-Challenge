// Function that runs the timer on quiz start
var counter = 75;

function startTimer() {

  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("Time's Up!");
      clearInterval(counter);
      endUserQuiz();
    }
  }, 1000);
}
function start() {
  document.getElementById("count");
  startTimer();
};

// Logic for show/hide main divs during quiz
document.getElementById("startQuiz").addEventListener("click", startUserQuiz);

// Alerts user that quiz has started
function startUserQuiz() {
  document.getElementById("landingPage").classList.add("d-none");
  document.getElementById("questionArea").classList.remove("d-none");
  runQuestions();
}

// Alerts user that quiz has ended
function endUserQuiz() {
  document.getElementById("questionArea").classList.add("d-none");
  document.getElementById("finalScreen").classList.remove("d-none");
  document.getElementById("timerDiv").classList.add("d-none");
  document.getElementById("showCorrectDIV").classList.add("d-none");
  printScore();
};

// Logic to run quiz questions
var questionIndex = 0;

function storeVar(el) {
  var answer = document.getElementById("showCorrectDIV");
  var amount = el.getAttribute("value");
  console.log(amount);

  //Check answers from question index
  if (questionIndex === 0 && amount === "2") {
    answer.textContent = "Correct!";
  } else if (questionIndex === 1 && amount === "2") {
    answer.textContent = "Correct!";
  } else if (questionIndex === 2 && amount === "3") {
    answer.textContent = "Correct!";
  } else if (questionIndex === 3 && amount === "2") {
    answer.textContent = "Correct!";
  } else if (questionIndex === 4 && amount === "3") {
    answer.textContent = "Correct!";
  } else {
    answer.textContent = "Wrong!";
    counter -= 10;
  };

  // Continue to ask questions, else end quiz
  if (questionIndex < 4) {
    questionIndex++;
    runQuestions();
  } else {
    endUserQuiz();
  };
};

function runQuestions() {
  var questionTitle = document.getElementById("questionsHere");

  questionTitle.innerHTML = questions[questionIndex].Question;
  op1 = document.getElementById("option1");
  op1.innerHTML = questions[questionIndex].Choices[0];
  op2 = document.getElementById("option2");
  op2.innerHTML = questions[questionIndex].Choices[1];
  op3 = document.getElementById("option3");
  op3.innerHTML = questions[questionIndex].Choices[2];
  op4 = document.getElementById("option4");
  op4.innerHTML = questions[questionIndex].Choices[3];
};

// Prints final score
function printScore() {
  span = document.getElementById("finalScore");
  span.innerHTML = counter;
}

// Saves score
function saveScore() {
  var initialsEl = document.querySelector("#initials");
  var userInitials = initialsEl.value.trim();
  var ulScores = document.getElementById("scoreList");
  var li = document.createElement("li");
  var saveHighScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  var newScore = {
    score: counter,
    initials: userInitials
  };

  saveHighScores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(saveHighScores));
};
