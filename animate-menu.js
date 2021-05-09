var socialMediaIcons = document.getElementsByClassName('fab');
var menuButton = document.getElementById('toggle-menu');
var icon = document.getElementById('menu-icon');
var rotated = false;

function hideIcons() {
    for(var i = 0; i < 3; i++) {
        socialMediaIcons[i].style.opacity = "0";
    }
}

function showIcons() {
    for(var i = 0; i < 3; i++) {
        socialMediaIcons[i].style.transition = ".5s all ease";
        socialMediaIcons[i].style.opacity = "1";
    }
}

icon.style.transition = ".5s all ease";
menuButton.addEventListener('click', function() {
    if(!rotated) {
        $(".fab").hover(function() {
            $(this).css("cursor", "pointer");
        }, function() {
            $(this).css("cursor", "normal");
        });
        icon.style.transform = "rotate(90deg)";
        rotated = true;
        showIcons();

        // ! The animation isn't the way we want it to be.
    } else {
        icon.style.transform = "rotate(-180deg)";
        rotated = false;
        hideIcons();
        $('.fab').unbind('mouseenter mouseleave');

        // ! The above line doesn't disable the hover effect.
    }
});

// ! This file needs to be prettified.
