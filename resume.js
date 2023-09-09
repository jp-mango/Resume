const navbar = document.getElementById('navbar');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar
        navbar.classList.remove('navbar-hidden');
    } else {
        // Scrolling down, hide the navbar
        navbar.classList.add('navbar-hidden');
    }

    prevScrollPos = currentScrollPos;
});