const task                = document.getElementById('task');
const answer              = document.getElementById('answer');
const answer2             = document.querySelector('.answer-button');
const nowScore            = document.querySelector('.nowScore');
const lastScore           = document.querySelector('.lastScore');
const rightAnswersElement = document.querySelector('.rightAnswers');
const wrongAnswersElement = document.querySelector('.wrongAnswers');

let nowScoreVar  = 0;
let lastScoreVar = localStorage.getItem('score');
let rightAnswers = 0;
let wrongAnswers = 0;
let maxNumber    = 50;
let minNumber    = 0;

function random(min,max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

let firstNumber  = random(minNumber,maxNumber);
let secondNumber = random(minNumber,maxNumber); 

let newTask = `${firstNumber} + ${secondNumber} = `;

function getCorrectAnswer(str)
{
    let strTask     = str.innerHTML;
    let numberArray = strTask.match(/\d+/g);
    console.log(numberArray);
    let correctAnswer = 0;

    for (let i = 0; i < numberArray.length; i++) {
        correctAnswer += Number(numberArray[i]);
    }

    return correctAnswer;
}

window.onload = function() {
    nowScore.innerHTML = `Ваш результат : ${nowScoreVar} ex`;
    lastScore.innerHTML = `Лучший результат : ${localStorage.getItem('score')} ex`;
    rightAnswersElement.innerHTML = `Правильных ответов: ${rightAnswers}`;
    wrongAnswersElement.innerHTML = `Неправильных ответов: ${wrongAnswers}`;
    answer.value = '';
    task.innerHTML = newTask;
};

let answerNumber = 0;

function checkAnswer() {
    answerNumber = Number(answer.value);
    
    if (answerNumber == getCorrectAnswer(task)) {
        nowScoreVar += 10;
        rightAnswers++;
        if (nowScoreVar > lastScoreVar) {
            lastScoreVar = nowScoreVar;
            localStorage.setItem('score',lastScoreVar);
        }

        nowScore.innerHTML = `Ваш результат : ${nowScoreVar} ex`;
        lastScore.innerHTML = `Лучший результат : ${localStorage.getItem('score')} ex`;
        rightAnswersElement.innerHTML = `Правильных ответов: ${rightAnswers}`;

        firstNumber  = random(0,maxNumber);
        secondNumber = random(0,maxNumber); 

        newTask = `${firstNumber} + ${secondNumber} = `;
        task.innerHTML = newTask;

        answer.value = '';
    } else {

        if (/\w+/.test(answerNumber) == true) {
            alert('Ответом должна быть только цифра!');
        } else if (/\n/.test(answerNumber) == true) {
            alert('Введите ответ!!');
        } else {
            wrongAnswers++
            wrongAnswersElement.innerHTML = `Неправильных ответов: ${wrongAnswers}`;

            firstNumber  = random(0,maxNumber);
            secondNumber = random(0,maxNumber); 

            newTask = `${firstNumber} + ${secondNumber} = `;
            task.innerHTML = newTask;

            answer.value = '';
        }
    }
}

answer.addEventListener('keypress',function(e) {
    if (event.keyCode == 13) {
        checkAnswer();
    }
});

answer2.addEventListener('click',function(event) {
    event.preventDefault();
    checkAnswer();    
});





