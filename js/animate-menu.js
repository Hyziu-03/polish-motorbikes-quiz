// ? Handlers.
var socialMediaIcons = document.getElementsByClassName('fab');
var menuButton = document.getElementById('toggle-menu');
var icon = document.getElementById('menu-icon');
icon.style.transition = ".5s all ease";

// ? Utility functions. 
function setTransition() {
    for(var i = 0; i < 3; i++) {
        socialMediaIcons[i].style.transition = ".5s all ease";
    }
}
setTransition();
function hideIcons() {
    for(var i = 0; i < 3; i++) {
        socialMediaIcons[i].style.opacity = "0";
    }
}
function showIcons() {
    for(var i = 0; i < 3; i++) {
        socialMediaIcons[i].style.opacity = "1";
    }
}

// ? Click listener.
var rotated = false;
menuButton.addEventListener('click', function() {
    if(!rotated) {
        icon.style.transform = "rotate(90deg)";
        rotated = true;
        showIcons();

		for(var i = 0; i < 3; i++) {
			socialMediaIcons[i].style.cursor = "pointer";
		}
    } else {
        icon.style.transform = "rotate(0deg)";
        rotated = false;
        hideIcons();

		for (var i = 0; i < 3; i++) {
			socialMediaIcons[i].style.cursor = "default";
		}
    }
});
