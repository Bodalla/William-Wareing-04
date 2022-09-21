const startButton = document.querySelector("#start-btn");
const quizQuestions = [
    "question-1",
    "question-2",
    "question-3",
    "question-4",
    "question-5",
    "question-6",
    "question-7",
    "question-8",
    //"question-9",
    //"question-10",

];

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



const startCard = document.querySelector(".card");
const questionCard =document.querySelector(".question-card");

const questions = []

function startQuiz() {
  startCard.style.display="none";
  questionCard.style.display="block";  
};

startButton.addEventListener("click", startQuiz)

const letters = document.createElement ("A","B","C", "D")
