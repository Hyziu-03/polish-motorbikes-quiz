// ? Buttons:
var button = document.getElementById('scroll-down');
var secondButton = document.getElementById('take-the-test');

// ? Scroll destinations: 
var form = document.getElementById('take-the-quiz');
var firstQuestionTile = document.getElementById('questions');

// ? Helpful variables:
const offset = 96;
const bodyLocation = document.body.getBoundingClientRect().top;

// ? Scrolling to the form:
var formLocation = form.getBoundingClientRect().top;
var formPosition = formLocation - bodyLocation;
var offsetPosiiton = formPosition - offset;
button.addEventListener('click', function() {
    window.scrollTo({
        top: offsetPosiiton,
        behavior: 'smooth'
    });
});

// ? Scrolling to questions:
var firstQuestionTileLocation = firstQuestionTile.getBoundingClientRect().top;
var firstQuestionTilePosition = firstQuestionTileLocation - bodyLocation;
var secondOffsetPosition = firstQuestionTilePosition - offset;
secondButton.addEventListener('click', function() {
    window.scrollTo({
        top: secondOffsetPosition,
        behavior: 'smooth'
    });
});
