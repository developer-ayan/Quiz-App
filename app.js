var min = 15;
var mm = 0
var sec = 0;
var second = document.getElementById('sec')
var minute = document.getElementById('min')
var timer;

function count() {
    mm++
    if (mm == 100) {

        sec--
        mm = 0
        second.innerHTML = sec


    }

    else if (min > 0 && sec == 0) {
        min--
        sec = 59
        second.innerHTML = sec
        minute.innerHTML = min
    }
    else if (min == 0 && sec == 0) {
        result()
        clearInterval(countdown)
        sec = 00
        min = 00
        sec.innerHTML = sec
        minute.innerHTML = min
    }
}

timer = setInterval(count, 10)

function resultRemove() {
    // if (i.length == 20) {
    //     var timer1 = document.getElementById("timer_1")
    //     timer1.style.display = "none"
    // }
    var timer1 = document.getElementById("timer_1")
    timer1.style.display = "none"
}

//Question bank
var questionBank = [
    {

        question: "What does HTML stand for.?",
        option: ['Hyper Text Preprocessor', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language', 'Hyper Text Markup Language'],
        answer: 'Hyper Text Markup Language'
    },
    {

        question: "What does CSS stand for.?",
        option: ['Common style sheet', 'Cascading style sheet', 'Computer style sheet', 'Colorful style sheet'],
        answer: 'Cascading style sheet'
    },
    {
        question: 'Which HTML tag is used to define internal style sheet?',
        option: ['script', 'style', 'html', 'link'],
        answer: 'style'
    },
    {
        question: 'Which property is used to change the color?',
        option: ['backgroundColor', 'BgColor', 'Color', 'background'],
        answer: 'background'
    },
    {
        question: "What does XML stand for.?",
        option: ['eXtensible Markup Language', 'eXecutable Multiple Language', 'eXtra Multi-Program Language', 'eXamine Multiple Language'],
        answer: 'eXtensible Markup Language'
    },
    {
        question: "A linkage of series of prototype objects is called as",
        option: ['prototype stack', 'prototype chain', 'prototype class', 'All of these'],
        answer: 'prototype chain'
    },
    {
        question: 'Which is the correct CSS syntax?',
        option: ['body{color:black;}', 'body[color:black;]', 'body{color=black;}', 'body(color-black,)'],
        answer: 'body{color:black;}'
    },
    {
        question: "In the above snippet, firstname and surname are",
        option: ['properties', 'property values', 'property names', 'property number'],
        answer: 'property names'
    },
    {
        question: "The object has three object attributes namely",
        option1: ['Class, parameters, object’s extensible flag', 'Prototype, class, object’s extensible flag', 'Prototype, class, objects’ parameters', 'None of these'],
        answer: 'Prototype, class, object’s extensible flag'
    },
    {
        question: "What does SQL stand for.?",
        option: ['Stylish Question Language', 'Stylesheet Query Language', 'Statement Question Language', 'Structured Query Language'],
        answer: 'Structured Query Language'
    },
    {
        question: "How to write on IF statement in JavaScript.?",
        option: ['if j == 5', 'if(j == 5)', 'if(j==5)then', 'if j == 5 then,'],
        answer: 'if(j == 5)'
    },
    {

        question: "How does a WHILE loop start.?",
        option: ['while(i<= 0)', 'while(i<=0; i++)', 'while i <= 0', 'while(i++ i<= 0)'],
        answer: 'while(i <= 0)'
    },
    {

        question: "The basic purpose of the toLocaleString() is to",
        option: ['return a localised ', 'return a parsed string', 'return a localized string ', 'None of these'],
        answer: 'return a localized string representation of the object'
    },
    {

        question: "What does PHP stand for.?",
        option: ['Hypertext Preprocessor', 'Hypertext Programming ', 'Hypertext Preprogramming', 'Hometext Prepeocessor'],
        answer: 'Hypertext Preprocessor'
    },
    {

        question: "How do you insert a comment in a HTML file.?",
        option: ['/*This is comment*/', '//This is comment', '!--This is comment--', '====This is comment===='],
        answer: '!--*This is comment---'
    },
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;



//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);

}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
        if (i == 14){
            var time = document.getElementById("timer_1").remove()
        }
    }
    else {
        // points.innerHTML = score + '/' + questionBank.length;
        points.innerHTML = parseInt(score / questionBank.length * 100).toFixed(1)  + "%";
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }

}


//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

console.log(questionBank.length)
 
displayQuestion();