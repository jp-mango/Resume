//hides navbar when scrolling down
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

// countdown timer
const launchDate = new Date("2023-11-23T00:00:00Z").getTime();

// Update the countdown every second
const countdown = document.getElementById("countdown");
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        countdown.innerHTML = "Website is live!";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);
