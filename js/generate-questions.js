var questionHeader = new Array(11);
var answerPlaceholder = new Array(11);

for(var i = 1; i <= 10; i++) {
    questionHeader[i] = document.getElementById('question-header' + i + '');
}

for(var i = 1; i <= 10; i++) {
    answerPlaceholder[i] = document.getElementsByClassName('answer' + '');
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

class Question {
    constructor(heading, correctAnswer) {
        this.heading = heading;
        this.correctAnswer = correctAnswer;
    }
}

var one = new Question('When did Romet celebrate its 50th anniversary?', 'In 1974');
var two = new Question('How were the canadian Romet bikes called?', 'Tyler');
var three = new Question("How was the girls Orion called?", 'Turing2');
var four = new Question('How were the Romet tandems called?', 'Duet and Derby');
var five = new Question('What does the abbreviation ZZR mean?', 'United Bike Workshop');
var six = new Question('How many gears does the Dezamet 019 engine have?', 'Three');
var seven = new Question('Which bike is Pasat an updated design of?', 'Wagant');
var eight = new Question('What other batch is the limited Romet Polo M760 batch based on?', '700');
var nine = new Question('What does the abbreviation 50-T-1 mean?', '50-Touristic-One');
var ten = new Question('What does the abbreviaton GIGE-E mean?', 'Central Inspectorate of Energy Technology');

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

// ? More code...

questionHeader.innerHTML = one.heading;
for(var i = 0; i < 4; i++) {
    if(i < 3) {
        answerPlaceholder[i].innerHTML = answers[i] + ',';
    } else {
        answerPlaceholder[i].innerHTML = answers[i] + '.';
    }
}
