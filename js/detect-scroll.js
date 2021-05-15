window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = $(this).scrollTop();

    if(scrollPosition >= 20) {
        header.style.boxShadow = '0 5px 10px #AAA40B';
    }
    else {
        header.style.boxShadow = '';
    }
});
