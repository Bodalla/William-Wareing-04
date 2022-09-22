//Start screen
const startButton = document.querySelector("#start-btn");
const startCard = document.querySelector(".card");

//

let timeRemaining = 60;
    let timer = document.getElementById("#timer");
    let timeElapse = setInterval(countdown, 1000);

 function countdown() {
     if (timeleft == -1) {
        clearTimeout(timeElapse);
     } else {timer.innerHTML = timeRemaining + "seconds remaining";
    timeRemaining--;
    }
     }



//Question 1 id's
const questionCard1 =document.querySelector(".question-card1");
    const q1c1 = document.querySelector("#q1c1");
    const q1c2 = document.querySelector("#q1c2");
    const q1c3 = document.querySelector("#q1c3");
    const q1c4 = document.querySelector("#q1c4");
    const skip1 = document.querySelector(".skip-question-1");
    const toQuestion2 = document.querySelector(".to-question-2");

//Question 2 id's
const questionCard2 =document.querySelector(".question-card2");
    const q2c1 = document.querySelector("#q2c1");
    const q2c2 = document.querySelector("#q2c2");
    const q2c3 = document.querySelector("#q2c3");
    const q2c4 = document.querySelector("#q2c4");
    const skip2 = document.querySelector(".skip-question-2");
    const toQuestion3 = document.querySelector(".to-question-3");

//Question 3 id's
const questionCard3 =document.querySelector(".question-card3");
    const q3c1 = document.querySelector("#q3c1");
    const q3c2 = document.querySelector("#q3c2");
    const q3c3 = document.querySelector("#q3c3");
    const q3c4 = document.querySelector("#q3c4");
    const skip3 = document.querySelector(".skip-question-3");
    const toQuestion4 = document.querySelector(".to-question-4");

//Question 4 id's
const questionCard4 =document.querySelector(".question-card4");
    const q4c1 = document.querySelector("#q4c1");
    const q4c2 = document.querySelector("#q4c2");
    const q4c3 = document.querySelector("#q4c3");
    const q4c4 = document.querySelector("#q4c4");
    const skip4 = document.querySelector(".skip-question-4");
    const toQuestion5 = document.querySelector(".to-question-5");

//Question 5 id's
const questionCard5 =document.querySelector(".question-card5");
    const q5c1 = document.querySelector("#q5c1");
    const q5c2 = document.querySelector("#q5c2");
    const q5c3 = document.querySelector("#q5c3");
    const q5c4 = document.querySelector("#q5c4");
    const skip5 = document.querySelector(".skip-question-5");
    const toQuestion6 = document.querySelector(".to-question-6");

//Question 6 id's
const questionCard6 =document.querySelector(".question-card6");
    const q6c1 = document.querySelector("#q6c1");
    const q6c2 = document.querySelector("#q6c2");
    const q6c3 = document.querySelector("#q6c3");
    const q6c4 = document.querySelector("#q6c4");
    const skip6 = document.querySelector(".skip-question-6");
    const toQuestion7 = document.querySelector(".to-question-7");

//Question 7 id's
const questionCard7 =document.querySelector(".question-card7");
    const q7c1 = document.querySelector("#q7c1");
    const q7c2 = document.querySelector("#q7c2");
    const q7c3 = document.querySelector("#q7c3");
    const q7c4 = document.querySelector("#q7c4");
    const skip7 = document.querySelector(".skip-question-7");
    const toQuestion8 = document.querySelector(".to-question-8");

//Question 8 id's
const questionCard8 =document.querySelector(".question-card8");
    const q8c1 = document.querySelector("#q8c1");
    const q8c2 = document.querySelector("#q8c2");
    const q8c3 = document.querySelector("#q8c3");
    const q8c4 = document.querySelector("#q8c4");
    const skip8 = document.querySelector(".skip-question-8");
    const viewResults = document.querySelector(".to-results");

//Link to answer feedback on HTML
let incorrect = document.querySelector("#incorrect");
let correct = document.querySelector("#correct");
let noWorries = document.querySelector("#no-worries")

//Answer feedback on js

function incorrectAlert1() {
    incorrect.style.display="block";
    questionCard1.style.display="none";
};

function incorrectAlert2() {
    incorrect.style.display="block";
    questionCard2.style.display="none";
};

function incorrectAlert3() {
    incorrect.style.display="block";
    questionCard3.style.display="none";
};

function incorrectAlert4() {
    incorrect.style.display="block";
    questionCard4.style.display="none";
};

function incorrectAlert5() {
    incorrect.style.display="block";
    questionCard5.style.display="none";
};

function incorrectAlert6() {
    incorrect.style.display="block";
    questionCard6.style.display="none";
};

function incorrectAlert7() {
    incorrect.style.display="block";
    questionCard7.style.display="none";
};

function incorrectAlert8() {
    incorrect.style.display="block";
    questionCard8.style.display="none";
};

function correctAlert1() {
    correct.style.display="block";
    questionCard1.style.display="none";
};

function correctAlert2() {
    correct.style.display="block";
    questionCard2.style.display="none";
};

function correctAlert3() {
    correct.style.display="block";
    questionCard3.style.display="none";
};

function correctAlert4() {
    correct.style.display="block";
    questionCard4.style.display="none";
};

function correctAlert5() {
    correct.style.display="block";
    questionCard5.style.display="none";
};

function correctAlert6() {
    correct.style.display="block";
    questionCard6.style.display="none";
};

function correctAlert7() {
    correct.style.display="block";
    questionCard7.style.display="none";
};

function correctAlert8() {
    correct.style.display="block";
    questionCard8.style.display="none";
};

function itsOkay1 () {
    noWorries.style.display="block";
    questionCard1.style.display="none";
}

function itsOkay2 () {
    noWorries.style.display="block";
    questionCard2.style.display="none";
}

function itsOkay3 () {
    noWorries.style.display="block";
    questionCard3.style.display="none";
}

function itsOkay4 () {
    noWorries.style.display="block";
    questionCard4.style.display="none";
}

function itsOkay5 () {
    noWorries.style.display="block";
    questionCard5.style.display="none";
}

function itsOkay6 () {
    noWorries.style.display="block";
    questionCard6.style.display="none";
}

function itsOkay7 () {
    noWorries.style.display="block";
    questionCard7.style.display="none";
}

function itsOkay8 () {
    noWorries.style.display="block";
    questionCard8.style.display="none";
}

function question2 () {
    questionCard2.style.display="block"
    toQuestion2.style.display="none";
    questionCard1.style.display="none";
    questionCard8.style.display="none";
    questionCard3.style.display="none";
    questionCard4.style.display="none";
    questionCard5.style.display="none";
    questionCard6.style.display="none";
    questionCard7.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function question3 () {
    questionCard3.style.display="block";
    toQuestion3.style.display="none";
    questionCard1.style.display="none";
    questionCard2.style.display="none";
    questionCard8.style.display="none";
    questionCard4.style.display="none";
    questionCard5.style.display="none";
    questionCard6.style.display="none";
    questionCard7.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function question4 () {
    questionCard4.style.display="block";
    toQuestion4.style.display="none";
    questionCard1.style.display="none";
    questionCard2.style.display="none";
    questionCard3.style.display="none";
    questionCard8.style.display="none";
    questionCard5.style.display="none";
    questionCard6.style.display="none";
    questionCard7.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function question5 () {
    questionCard5.style.display="block";
    toQuestion5.style.display="none";
    questionCard1.style.display="none";
    questionCard2.style.display="none";
    questionCard3.style.display="none";
    questionCard4.style.display="none";
    questionCard8.style.display="none";
    questionCard6.style.display="none";
    questionCard7.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function question6 () {
    questionCard6.style.display="block";
    toQuestion6.style.display="none";
    questionCard1.style.display="none";
    questionCard2.style.display="none";
    questionCard3.style.display="none";
    questionCard4.style.display="none";
    questionCard5.style.display="none";
    questionCard8.style.display="none";
    questionCard7.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function question7 () {
    questionCard7.style.display="block";
    questionCard1.style.display="none";
    questionCard2.style.display="none";
    questionCard3.style.display="none";
    questionCard4.style.display="none";
    questionCard5.style.display="none";
    questionCard6.style.display="none";
    questionCard8.style.display="none";  
    toQuestion7.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function question8 () {
    questionCard8.style.display="block";
    questionCard1.style.display="none";
    questionCard2.style.display="none";
    questionCard3.style.display="none";
    questionCard4.style.display="none";
    questionCard5.style.display="none";
    questionCard6.style.display="none";
    questionCard7.style.display="none";
    toQuestion8.style.display="none";
    incorrect.style.display="none";
    correct.style.display="none";
    noWorries.style.display="none";
}

function startQuiz() {
  startCard.style.display="none";
  questionCard1.style.display="block";
};

function nextQuestion2 () {
    toQuestion2.style.display="block";
}

function nextQuestion3 () {
    toQuestion3.style.display="block";
}

function nextQuestion4 () {
    toQuestion4.style.display="block";
}

function nextQuestion5 () {
    toQuestion5.style.display="block";
}

function nextQuestion6 () {
    toQuestion6.style.display="block";
}

function nextQuestion7 () {
    toQuestion7.style.display="block";
}

function nextQuestion8 () {
    toQuestion8.style.display="block";
}

function viewMyResults () {
    viewResults.style.display="block";
}

startButton.addEventListener("click", startQuiz);

//Question 1 buttons:

q1c1.addEventListener("click", incorrectAlert1), nextQuestion2();
q1c2.addEventListener("click", incorrectAlert1), nextQuestion2();
q1c3.addEventListener("click", correctAlert1), nextQuestion2();
q1c4.addEventListener("click", incorrectAlert1), nextQuestion2();
skip1.addEventListener("click", itsOkay1), nextQuestion2();

toQuestion2.addEventListener("click", question2);

//Question 2 buttons:
q2c1.addEventListener("click", correctAlert2), nextQuestion3();
q2c2.addEventListener("click", incorrectAlert2), nextQuestion3();
q2c3.addEventListener("click", incorrectAlert2), nextQuestion3();
q2c4.addEventListener("click", incorrectAlert2), nextQuestion3();
skip2.addEventListener("click", itsOkay2), nextQuestion3();

toQuestion3.addEventListener("click",question3);

//Question 3 buttons:
q3c1.addEventListener("click", incorrectAlert3), nextQuestion4();
q3c2.addEventListener("click", incorrectAlert3), nextQuestion4();
q3c3.addEventListener("click", incorrectAlert3), nextQuestion4();
q3c4.addEventListener("click", correctAlert3), nextQuestion4();
skip3.addEventListener("click", itsOkay3), nextQuestion4();

toQuestion4.addEventListener("click",question4);

//Question 4 buttons:
q4c1.addEventListener("click", incorrectAlert4), nextQuestion5();
q4c1.addEventListener("click", correctAlert4), nextQuestion5();
q4c1.addEventListener("click", incorrectAlert4), nextQuestion5();
q4c1.addEventListener("click", incorrectAlert4), nextQuestion5();
skip4.addEventListener("click", itsOkay4), nextQuestion5();

toQuestion5.addEventListener("click",question5);

//Question 5 buttons:
q5c1.addEventListener("click", incorrectAlert5), nextQuestion6();
q5c1.addEventListener("click", incorrectAlert5), nextQuestion6();
q5c1.addEventListener("click", incorrectAlert5), nextQuestion6();
q5c1.addEventListener("click", correctAlert5), nextQuestion6();
skip5.addEventListener("click", itsOkay5), nextQuestion6();

toQuestion6.addEventListener("click",question6);

//Question 6 buttons:
q6c1.addEventListener("click", incorrectAlert6), nextQuestion7();
q6c1.addEventListener("click", correctAlert6), nextQuestion7();
q6c1.addEventListener("click", incorrectAlert6), nextQuestion7();
q6c1.addEventListener("click", incorrectAlert6), nextQuestion7();
skip6.addEventListener("click", itsOkay6), nextQuestion7();

toQuestion7.addEventListener("click",question7);

//Question 7 buttons:
q7c1.addEventListener("click", incorrectAlert7), nextQuestion8();
q7c1.addEventListener("click", incorrectAlert7), nextQuestion8();
q7c1.addEventListener("click", incorrectAlert7), nextQuestion8();
q7c1.addEventListener("click", correctAlert7), nextQuestion8();
skip7.addEventListener("click", itsOkay7), nextQuestion8();

toQuestion8.addEventListener("click",question8);

//Question 8 buttons:
// q8c1.addEventListener("click", incorrectAlert8),viewMyResults();
// q8c1.addEventListener("click", incorrectAlert8),viewMyResults();
// q8c1.addEventListener("click", correctAlert8),viewMyResults();
// q8c1.addEventListener("click", incorrectAlert8),viewMyResults();
// skip8.addEventListener("click", itsOkay8),viewMyResults();

// viewResults.addEventListener("click");

























//const letters = document.createElement ("A","B","C", "D")

// const quizQuestions = [
//     "question-1",
//     "question-2",
//     "question-3",
//     "question-4",
//     "question-5",
//     "question-6",
//     "question-7",
//     "question-8",
// ];

// console.log(quizQuestions);

//layout: question=q, choice=c
// const quizChoices = [
//     ["q1c1", "q1c2", "q1c3", "q1c4"
// ], [
//     "q2c1", "q2c2","q2c3", "q2c4"
// ], [
//     "q3c1", "q3c2", "q3c3", "q3c4"
// ], [
//     "q4c1", "q4c2", "q4c3", "q4c4"
// ], [
//     "q5c1", "q5c2", "q5c3", "q5c4"
// ], [
//     "q6c1", "q6c2", "q6c3", "q6c4"
// ], [
//     "q7c1", "q7c2", "q7c3", "q7c4"
// ], [
//     "q8c1", "q8c2", "q8c3", "q8c4"
// ],
// ];

//console.log(quizChoices);

//let question1 = document.createElement (<ul>
//    What is the starting index of an array?
//</ul>);

//let question2 =document.createElement 


//const questions = []