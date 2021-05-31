// ? Handlers.
var socialMediaIcons = document.getElementsByClassName('fab');
var menuOptions = document.getElementsByClassName('menu-option');
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
        socialMediaIcons[i].removeAttribute('tabindex');
        menuOptions[i].removeAttribute('href');
    }
}
hideIcons();
function showIcons() {
    for(var i = 0; i < 3; i++) {
        socialMediaIcons[i].style.opacity = "1";
        socialMediaIcons[i].setAttribute('tabindex', '0');
    }
    menuOptions[0].setAttribute('href', 'https://github.com/Hyziu-03/');
    menuOptions[1].setAttribute('href', 'https://www.facebook.com/hyziakszymon/');
    menuOptions[2].setAttribute('href', 'https://www.instagram.com/szymon_hyziak/');
}

// ? Click listener.
var rotated = false;
menuButton.addEventListener('click', function() {
    if(!rotated) {
        icon.style.transform = "rotate(90deg)";
        rotated = true;
        showIcons();
    } else {
        icon.style.transform = "rotate(0deg)";
        rotated = false;
        hideIcons();
    }
});
