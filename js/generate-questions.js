class Question {
    constructor(heading, correctAnswer) {
        this.heading = heading;
        this.correctAnswer = correctAnswer;
    }
}

var questionsHTML = document.getElementById('questions');
questionsHTML.innerHTML = '<article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-1"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-1" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-1" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-1" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-1" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">1</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-2"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-2" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-2" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-2" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-2" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">2</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-3"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-3" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-3" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-3" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-3" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">3</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-4"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-4" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-4" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-4" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-4" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">4</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-5"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-5" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-5" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-5" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-5" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">5</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-6"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-6" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-6" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-6" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-6" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">6</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-7"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-7" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-7" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-7" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-7" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">7</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-8"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-8" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-8" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-8" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-8" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">8</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-9"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-9" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-9" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-9" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-9" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">9</div> </div> </div> </div> </article> <article> <div class="row"> <div class="question-tile col-xl-12"> <h1 tabindex="0" class="question-header" id="question-header-10"></h1> <div style="display: flex;" class="col-xl-6"> <div class="question-content col-xl-6"> <div class="answers"> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-10" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-10" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-10" tabindex="0"></span> </label> <label class="answer-label"> <input type="radio" tabindex="-1" class="radio-button" name="answer"> <span class="answer-10" tabindex="0"></span> </label> </div> </div> <div class="question-number col-xl-6">10</div> </div> </div> </div> </article>';

// ? Objects of ten questions with the correct answers.
var questionOne = new Question('When did Romet celebrate its 50th anniversary?', 'In 1974');
var questionTwo = new Question('How were the canadian Romet bikes called?', 'Tyler');
var questionThree = new Question("How was the girls' Orion called?", 'Turing2');
var questionFour = new Question('How were the Romet tandems called?', 'Duet and Derby');
var questionFive = new Question('What does the abbreviation ZZR mean?', 'United Bike Workshop');
var questionSix = new Question('How many gears does the Dezamet 019 engine have?', 'Three');
var questionSeven = new Question('Which bike is Pasat an updated design of?', 'Wagant');
var questionEight = new Question('What other batch is the limited Romet Polo M760 batch based on?', '700');
var questionNine = new Question('What does the abbreviation 50-T-1 mean?', '50-Touristic-One');
var questionTen = new Question('What does the abbreviaton GIGE-E mean?', 'Central Inspectorate of Energy Technology');

// ? Arrays of answers to the ten questions:
var answersOne = ['In the Year 1970', 'In the Year 1987', 'In the Year 1974', 'This has never happened'];
var answersTwo = ['Romet Unidal', 'Romet Super Cycle', 'Romet Tyler', 'Romet Universal'];
var answersThree = ['Romet Orion', 'Romet Kalina', 'Romet Sava', 'Romet Turing2'];
var answersFour = ['Duet and Zenith', 'Kormoran and Wilga', 'Duet and Derby', 'It was no tandem these days'];
var answersFive = ['Crazy Cyclist Unity', 'United Bike Workshop', 'It is an ordinary name', 'It is a quality standard '];
var answersSix = ['Three gears', 'Four gears', 'Five gears', 'It does not matter'];
var answersSeven = ['Romet Jubilat', 'Romet Kormoran', 'Romet Meteor Sport', 'Romet Wagant'];
var answersEight = ['The 700 batch', 'The Ogar batch', 'The 50-T-1 batch', 'The Pony batch'];
var answersNine = ['50-Touristic-One', 'It is an ordinary factory indication', 'It does not mean anything important', 'It indicates the wheel size and engine type'];
var answersTen = ['It is a quality standard', 'It does not mean anything important', 'Central Inspectorate of Human Factors and Ergonomics', 'Central Inspectorate of Energy Technology'];

// ? Functions shuffling the answers: 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function shuffleEverything() {
    shuffle(answersOne); shuffle(answersTwo); shuffle(answersThree); shuffle(answersFour); shuffle(answersFive); shuffle(answersSix); shuffle(answersSeven); shuffle(answersEight); shuffle(answersNine); shuffle(answersTen);
}
shuffleEverything();

// ? Handling headers:
var headerOne = document.getElementById('question-header-1').innerHTML = questionOne.heading;
var headerTwo = document.getElementById('question-header-2').innerHTML = questionTwo.heading;
var headerThree = document.getElementById('question-header-3').innerHTML = questionThree.heading;
var headerFour = document.getElementById('question-header-4').innerHTML = questionFour.heading;
var headerFive = document.getElementById('question-header-5').innerHTML = questionFive.heading;
var headerSix = document.getElementById('question-header-6').innerHTML = questionSix.heading;
var headerSeven = document.getElementById('question-header-7').innerHTML = questionSeven.heading;
var headerEight = document.getElementById('question-header-8').innerHTML = questionEight.heading;
var headerNine = document.getElementById('question-header-9').innerHTML = questionNine.heading;
var headerTen = document.getElementById('question-header-10').innerHTML = questionTen.heading;

// ? Handling answers:
var answerPlaceholderOne = document.getElementsByClassName('answer-1');
var answerPlaceholderTwo = document.getElementsByClassName('answer-2');
var answerPlaceholderThree = document.getElementsByClassName('answer-3');
var answerPlaceholderFour = document.getElementsByClassName('answer-4');
var answerPlaceholderFive = document.getElementsByClassName('answer-5');
var answerPlaceholderSix = document.getElementsByClassName('answer-6');
var answerPlaceholderSeven = document.getElementsByClassName('answer-7');
var answerPlaceholderEight = document.getElementsByClassName('answer-8');
var answerPlaceholderNine = document.getElementsByClassName('answer-9');
var answerPlaceholderTen = document.getElementsByClassName('answer-10');

function generateAnswers() {
    for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderOne[i].innerHTML += answersOne[i]; } else { answerPlaceholderOne[i].innerHTML += answersOne[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderTwo[i].innerHTML += answersTwo[i]; } else { answerPlaceholderTwo[i].innerHTML += answersTwo[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderThree[i].innerHTML += answersThree[i]; } else { answerPlaceholderThree[i].innerHTML += answersThree[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderFour[i].innerHTML += answersFour[i]; } else { answerPlaceholderFour[i].innerHTML += answersFour[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderFive[i].innerHTML += answersFive[i]; } else { answerPlaceholderFive[i].innerHTML += answersFive[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderSix[i].innerHTML += answersSix[i]; } else { answerPlaceholderSix[i].innerHTML += answersSix[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderSeven[i].innerHTML += answersSeven[i]; } else { answerPlaceholderSeven[i].innerHTML += answersSeven[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderEight[i].innerHTML += answersEight[i]; } else { answerPlaceholderEight[i].innerHTML += answersEight[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderNine[i].innerHTML += answersNine[i]; } else { answerPlaceholderNine[i].innerHTML += answersNine[i]; } } for (var i = 0; i < 4; i++) { if (i < 3) { answerPlaceholderTen[i].innerHTML += answersTen[i]; } else { answerPlaceholderTen[i].innerHTML += answersTen[i]; } }
}
generateAnswers();

function readAnswers() {
    var answerLabels = document.getElementsByClassName('answer-label');
    var answersNumber = answerLabels.length;

    for (var i = 0; i < answersNumber; i++) {
        answerLabels[i].addEventListener('click', function () {
            var selectedRadioButton = this.getElementsByTagName('input');
            selectedRadioButton.checked = true;
            this.style.background = "#080936";
            this.style.color = "#CFCFCF";
        });
    }
}
readAnswers();
