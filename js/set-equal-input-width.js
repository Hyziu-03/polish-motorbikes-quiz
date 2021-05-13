var emailLabel = document.getElementById('email-label');
var nameLabel = document.getElementById('name-label');

var emailInput = document.getElementById('email-input');
var nameInput = document.getElementById('name-input');

var emailTilesWidth = emailLabel.clientWidth + emailInput.clientWidth;
var nameTilesWidth = nameLabel.clientWidth + nameInput.clientWidth;

if(emailTilesWidth > nameTilesWidth) {
    nameInput.style.width = emailTilesWidth - nameLabel + 'px';
} else {
    emailInput.style.width = nameTilesWidth - emailLabel + 'px';
}
// $ Equal width of the elements should be set.
