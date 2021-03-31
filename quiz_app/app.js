function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Soru prototipi
Question.prototype.checkAnsver = function (answer) {
    return this.answer === answer;
}

//Soru constructor

function Quiz(questions) {
    this.questions = questions;
    this.soruskor = 0;
    this.questionIndex = 0;
}

//Quiz prototipi

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

//Quiz b itişi

Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex;
}

//Quiz cevapları
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnsver(answer)) {
        this.soruskor++;
    }
    this.questionIndex++;
}

var q1 = new Question('En popüler programlama dili nedir?', ["C#", "JAVASCRIPT", "PYTHON", "C++"], "PYTHON");
var q2 = new Question('Hangisi C ailesinden bir dildir?', ["HTML", "CSS", "Bootstrap", "Java"], "Java");
var q3 = new Question('Aşağıdakilerden hangisi uygulama yazılımı türlerinden değildir?', ["Players", "Drivers", "Sunum programları", "Antivirüs Programları"], "Javascript");
var q4 = new Question('Aşağıdakilerden hangisi bir tarayıcı değildir?', ["Macromedia Fireworks", "Chrome", "Yandex", "Opera"], "Macromedia Fireworks");
var q5 = new Question('Aşağıdakilerden hangisi bir sistem yazılımıdır?', ["Adobe Photoshop", "Windows 10", "Internet Explorer", "Google Chrome"], "Windows 10");
var q6 = new Question('Aşağıdakilerden hangisi yazılıma örnek değidlir?', ["Fare", "Antivirüs", "Windows", "Chrome"], "Fare");
var q7 = new Question('Aşağıdaki yazılımlardan hangisi yanlış eşleştirilmiştir?', ["Microsoft Word-Sunum Programı", "Eset Nod 32-Antivirüs Yazılımı", "Paint-Resim Programı", "Mozilla Firefox-İnternet Tarayıcısı"], "Microsoft Word-Sunum Programı");
var q8 = new Question('Aşağıdakilerden hangisi zararlı bir yazılımdır?', ["Google Chrome", "Power Point", "Word", "Trojan"], "Trojan");
var q9 = new Question('Müzik dinlemek için kullanılan uygulama yazılımı hangisidir?', ["Avire", "CSS", "Paint", "Windows Media Player"], "Windows Media Player");
var q10 = new Question('Hangisi bir programlama dili değidlir?', ["HTML", "Javascript", "Java", "Python"], "HTML");

var questions = [q1, q2, q3,q4,q5,q6,q7,q8,q9,q10];
//console.log(q1.checkAnsver('PYTHON'));

//Start quiz

var quiz = new Quiz(questions);
soruYukle();

function soruYukle() {
    if (quiz.isFinish()) {
        skorGoster();
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.querySelector('#choice' + i);
            element.innerHTML = choices[i];

            guess('btn' + i, choices[i]);
        }
        showProgress();
        document.querySelector('#question').textContent = question.text;
    }
}

function guess(id, guess) {
    var btn=document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        soruYukle();
    }
}

function skorGoster() {
    var html = `<h2>Skorunuz</h2><h4>${quiz.soruskor}</h4>`;

    document.querySelector('.kart-body').innerHTML=html;
}

function showProgress(){
    var totalQuestion=quiz.questions.length;
    var questionNumber=quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML='Soru '+ questionNumber+'/'+totalQuestion;
}