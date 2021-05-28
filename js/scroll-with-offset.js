var button = document.getElementById('scroll-down');
var form = document.getElementById('take-the-quiz');
var offset = 96;
var bodyLocation = document.body.getBoundingClientRect().top;
var formLocation = form.getBoundingClientRect().top;
var formPosition = formLocation - bodyLocation;
var offsetPosiiton = formPosition - offset;

button.addEventListener('click', function() {
    window.scrollTo({
        top: offsetPosiiton,
        behavior: 'smooth'
    });
});

var secondButton = document.getElementById('take-the-test');
var firstQuestionTile = document.getElementById('first-question');
var firstQuestionTileLocation = firstQuestionTile.getBoundingClientRect();
var firstQuestionTilePosition = firstQuestionTileLocation - bodyLocation;
var secondOffsetPosition = firstQuestionTilePosition - offset;

secondButton.addEventListener('click', function() {
    window.scrollTo({
        top: secondOffsetPosition,
        behavior: 'smooth'
    });
});
