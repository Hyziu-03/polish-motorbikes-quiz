class Question {
    constructor(heading, correctAnswer) {
        this.heading = heading;
        this.correctAnswer = correctAnswer;
    }
}

// ? Objects of ten questions with the correct answers.
var questionOne = new Question('When did Romet celebrate its 50th anniversary?', 'In 1974');
var questionTwo = new Question('How were the canadian Romet bikes called?', 'Tyler');
var questionThree = new Question("How was the girls Orion called?", 'Turing2');
var questionFour = new Question('How were the Romet tandems called?', 'Duet and Derby');
var questionFive = new Question('What does the abbreviation ZZR mean?', 'United Bike Workshop');
var questionSix = new Question('How many gears does the Dezamet 019 engine have?', 'Three');
var questionSeven = new Question('Which bike is Pasat an updated design of?', 'Wagant');
var questionEight = new Question('What other batch is the limited Romet Polo M760 batch based on?', '700');
var questionNine = new Question('What does the abbreviation 50-T-1 mean?', '50-Touristic-One');
var questionTen = new Question('What does the abbreviaton GIGE-E mean?', 'Central Inspectorate of Energy Technology');

// ? Arrays of answers to the ten questions:
var answersOne = ['In 1970', 'In 1987', 'In 1974', 'This never happened'];
var answersTwo = ['Unidal', 'Super Cycle', 'Tyler', 'Universal'];
var answersThree = ['Just Orion', 'Kalina', 'Sava', 'Turing2'];
var answersFour = ['Duet and Zenith', 'Kormoran and Wilga', 'Duet and Derby', 'It was no tandem these days'];
var answersFive = ['Crazy Cyclist Unity', 'United Bike Workshop', 'It is an ordinary name', 'It is a quality standard '];
var answersSix = ['Three', 'Four', 'Five', 'It does not matter'];
var answersSeven = ['Jubilat', 'Kormoran', 'Meteor Sport', 'Wagant'];
var answersEight = ['700', 'Ogar', '50-T-1', 'Pony'];
var answersNine = ['50-Touristic-One', 'It is an ordinary factory indication', 'It does not mean anything important', 'It indicates the wheel size and engine type'];
var answersTen = ['It is a quality standard', 'It does not mean anything important', 'Central Inspectorate of Human Factors and Ergonomics', 'Central Inspectorate of Energy Technology'];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(answersOne);
shuffle(answersTwo);
shuffle(answersThree);
shuffle(answersFour);
shuffle(answersFive);
shuffle(answersSix);
shuffle(answersSeven);
shuffle(answersEight);
shuffle(answersNine);
shuffle(answersTen);

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

for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderOne[i].innerHTML += answersOne[i] + ',';
    } else {
        answerPlaceholderOne[i].innerHTML += answersOne[i] + '.';
    }
}

for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderTwo[i].innerHTML += answersTwo[i] + ',';
    } else {
        answerPlaceholderTwo[i].innerHTML += answersTwo[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderThree[i].innerHTML += answersThree[i] + ',';
    } else {
        answerPlaceholderThree[i].innerHTML += answersThree[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderFour[i].innerHTML += answersFour[i] + ',';
    } else {
        answerPlaceholderFour[i].innerHTML += answersFour[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderFive[i].innerHTML += answersFive[i] + ',';
    } else {
        answerPlaceholderFive[i].innerHTML += answersFive[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderSix[i].innerHTML += answersSix[i] + ',';
    } else {
        answerPlaceholderSix[i].innerHTML += answersSix[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderSeven[i].innerHTML += answersSeven[i] + ',';
    } else {
        answerPlaceholderSeven[i].innerHTML += answersSeven[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderEight[i].innerHTML += answersEight[i] + ',';
    } else {
        answerPlaceholderEight[i].innerHTML += answersEight[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderNine[i].innerHTML += answersNine[i] + ',';
    } else {
        answerPlaceholderNine[i].innerHTML += answersNine[i] + '.';
    }
}
for (var i = 0; i < 4; i++) {
    if (i < 3) {
        answerPlaceholderTen[i].innerHTML += answersTen[i] + ',';
    } else {
        answerPlaceholderTen[i].innerHTML += answersTen[i] + '.';
    }
}