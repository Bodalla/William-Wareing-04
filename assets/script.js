const startButton = document.querySelector("#start-btn");

//Question 1 id's
    const q1c1 = document.querySelector("#q1c1");
    const q1c2 = document.querySelector("#q1c2");
    const q1c3 = document.querySelector("#q1c3");
    const q1c4 = document.querySelector("#q1c4");

//Question 2 id's
    const q2c1 = document.querySelector("#q2c1");
    const q2c2 = document.querySelector("#q2c2");
    const q2c3 = document.querySelector("#q2c3");
    const q2c4 = document.querySelector("#q2c4");

//Question 3 id's
    const q3c1 = document.querySelector("#q3c1");
    const q3c2 = document.querySelector("#q3c2");
    const q3c3 = document.querySelector("#q3c3");
    const q3c4 = document.querySelector("#q3c4");

//Question 4 id's
    const q4c1 = document.querySelector("#q4c1");
    const q4c2 = document.querySelector("#q4c2");
    const q4c3 = document.querySelector("#q4c3");
    const q4c4 = document.querySelector("#q4c4");

//Question 5 id's
    const q5c1 = document.querySelector("#q5c1");
    const q5c2 = document.querySelector("#q5c2");
    const q5c3 = document.querySelector("#q5c3");
    const q5c4 = document.querySelector("#q5c4");

//Question 6 id's
    const q6c1 = document.querySelector("#q6c1");
    const q6c2 = document.querySelector("#q6c2");
    const q6c3 = document.querySelector("#q6c3");
    const q6c4 = document.querySelector("#q6c4");

//Question 7 id's
    const q7c1 = document.querySelector("#q7c1");
    const q7c2 = document.querySelector("#q7c2");
    const q7c3 = document.querySelector("#q7c3");
    const q7c4 = document.querySelector("#q7c4");

//Question 8 id's
    const q8c1 = document.querySelector("#q8c1");
    const q8c2 = document.querySelector("#q8c2");
    const q8c3 = document.querySelector("#q8c3");
    const q8c4 = document.querySelector("#q8c4");

//Link to 
let incorrect = document.querySelector("#incorrect");
let correct = document.querySelector("#correct");

const quizQuestions = [
    "question-1",
    "question-2",
    "question-3",
    "question-4",
    "question-5",
    "question-6",
    "question-7",
    "question-8",
];

console.log(quizQuestions);

//layout: question=q, choice=c
const quizChoices = [
    ["q1c1", "q1c2", "q1c3", "q1c4"
], [
    "q2c1", "q2c2","q2c3", "q2c4"
], [
    "q3c1", "q3c2", "q3c3", "q3c4"
], [
    "q4c1", "q4c2", "q4c3", "q4c4"
], [
    "q5c1", "q5c2", "q5c3", "q5c4"
], [
    "q6c1", "q6c2", "q6c3", "q6c4"
], [
    "q7c1", "q7c2", "q7c3", "q7c4"
], [
    "q8c1", "q8c2", "q8c3", "q8c4"
],
];

console.log(quizChoices);

//let question1 = document.createElement (<ul>
//    What is the starting index of an array?
//</ul>);

//let question2 =document.createElement 

const startCard = document.querySelector(".card");
const questionCard =document.querySelector(".question-card1");

//const questions = []

function incorrectAlert() {
    incorrect.style.display="block";
    questionCard.style.display="none";
};

function correctAlert() {
    correct.style.display="block";
    questionCard.style.display="none";
};

function startQuiz() {
  startCard.style.display="none";
  questionCard.style.display="block";
  //questionCard.style.color="blue";
  //questionCard.style.fontsize="30pt";
};

startButton.addEventListener("click", startQuiz)

q1c1.addEventListener("click", incorrectAlert)
q1c2.addEventListener("click", incorrectAlert)
q1c3.addEventListener("click", correctAlert)
q1c4.addEventListener("click", incorrectAlert)


//const letters = document.createElement ("A","B","C", "D")
