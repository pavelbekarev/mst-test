window.addEventListener('scroll', function() {
    const menuBar = document.querySelector("[data-js-header]");

    if (window.scrollY > 100) {
        menuBar.classList.add('fixed');
    } else {
        menuBar.classList.remove('fixed');
    }
});
