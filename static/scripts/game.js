const togglePopup = () => {
  document.getElementById("popup-1").classList.toggle("active");
}

let count_timer = 120;

let minutes = parseInt(count_timer/60);
let seconds = parseInt(count_timer%60);
function countDownTimer(){
  if(seconds < 10){
      seconds= "0"+ seconds ;
  }if(minutes < 10){
      minutes= "0"+ minutes ;
  }
  
  document.getElementById("total-time-left").innerHTML = ""+minutes+":"+seconds+"" ;
  if(count_timer <= 0){
      count_timer = 120;
      window.location.href = "/index.html";
  } 
  else {
      count_timer = count_timer -1 ;
      minutes = parseInt(count_timer/60);
      seconds = parseInt(count_timer%60);
      localStorage.setItem("count_timer",count_timer);
      setTimeout("countDownTimer()",1000);
  }
}
setTimeout("countDownTimer()",1000);



const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounterText');
const scoreText = document.getElementById('scoreText');
const image = document.getElementById('questionImage');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'in a standard drum kit, which drum is played using a foot pedal?',
        choice1: 'snare drum',
        choice2: 'floor tom',
        choice3: 'bass drum',
        choice4: 'ride',
        answer: 3,
        
    },
    {
        question:
            "when striking a drum, which of the following is a paradiddle?",
        choice1: "right, left, right, left",
        choice2: "right, left, right, right",
        choice3: "right, right, left, left",
        choice4: "right, right, right, left",
        answer: 2,
    },
    {
        question: "the bass drum is usually played on which of these beats in a 4/4 time signature?",
        choice1: "2 & 4",
        choice2: "1 & the + of 3",
        choice3: "3 & 4",
        choice4: "1 & 3",
        answer: 4,
    },
    {
        question: "which drum traditionally sits between the drummers knees?",
        choice1: "snare drum",
        choice2: "floor tom",
        choice3: "bass drum",
        choice4: "rack tom",
        answer: 1,
    },
    {
        question: "in a rock or pop band, which other instrument should a drummer listen to?"/*"how would you count the following rythym?" [document.write("<img src='../images/1+23e+4+.png'>")],
        questionImage: document.write("<img src='../images/1+23e+4+.png'>")*/,
        choice1: "rhthym guitar",
        choice2: "bass guitar",
        choice3: "lead guitar",
        choice4: "keyboard",
        answer: 2,
    },
    {
      question: "how would you count the following rythym?",
      image: '../images/1+23e+4+.png',
      choice1: "1 + 2   3e+ 4 +",
      choice2: "1 2 3 4 5 6 7 8",
      choice3: "1e+ 2   3 + 4 +",
      choice4: "1   2 + 3e a 4",
      answer: 1,
    },
    {
      question: "which parts of the drum kit are notated?",
      image: '../images/snare_tom_bass_hi-hat.png',
      choice1: "bass, hi-tom, ride & snare",
      choice2: "low-tom, bass, snare & hi-hat",
      choice3: "crash, hi-tom, middle-tom & low-tom",
      choice4: "cowbell, snare, bass & good looks",
      answer: 2,
    },
    {
      question: "how would you count the following rythym?",
      image: '../images/1+a2+34e+.png',
      choice1: "1 2 3 4 5 6 7 8 9",
      choice2: "1e+ 2 + 3   4 +a",
      choice3: "1 + 2e+ 3 + 4e",
      choice4: "1 +a2 + 3   4e+",
      answer: 4,
    },
    {
      question: "what's the main purpose of a drummer",
      choice1: "looking cool",
      choice2: "being loud",
      choice3: "keeping time",
      choice4: "spinning sticks",
      answer: 3,
    },
    {
      question: "what style of music often has a double bass pedal",
      choice1: "metal",
      choice2: "jazz",
      choice3: "punk",
      choice4: "pop",
      answer: 1,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('../pages/end.html');
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex  = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    if (currentQuestion.image) {
      image.src = currentQuestion.image;
    }
    else {
      image.src = '';
    }


    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};



choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
  
      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  
      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }
  
      selectedChoice.parentElement.classList.add(classToApply);
  
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
  });

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };

function confirm_alert_home (node) {
  return confirm("are you sure you want to go back home?");
}
function confirm_alert_game (node) {
  return confirm("are you sure you want to restart?");
}

startGame();