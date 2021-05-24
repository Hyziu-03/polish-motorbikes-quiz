var questionHeader = document.getElementById('question-header');
var answerPlaceholder = document.getElementsByClassName('answer');

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
var answers = ['In 1970', 'In 1987', 'In 1974', 'This never happened'];
shuffle(answers);

questionHeader.innerHTML = one.heading;
for(var i = 0; i < 4; i++) {
    if(i < 3) {
        answerPlaceholder[i].innerHTML = answers[i] + ',';
    } else {
        answerPlaceholder[i].innerHTML = answers[i] + '.';
    }
}
