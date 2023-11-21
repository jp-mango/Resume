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
document.addEventListener('DOMContentLoaded', function () {
	// Attempt to get the countdown element
	const countdown = document.getElementById('countdown');

	// Check if the countdown element exists
	if (countdown) {
		// If it exists, set up the countdown
		setupCountdown();
	} else {
		console.log('Countdown element not found. Skipping countdown setup.');
	}
});

function setupCountdown() {
	if (window.location.href.includes('resume_projects.html')) {
		const launchDate = new Date('2024-01-01T00:00:00Z').getTime();

		const countdown = document.getElementById('countdown');

		// Update the countdown every second
		const timer = setInterval(function () {
			const now = new Date().getTime();
			const distance = launchDate - now;

			if (distance <= 0) {
				clearInterval(timer);
				countdown.innerHTML = 'Website is live!';
			} else {
				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);

				countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
			}
		}, 1000);
	}
}

//calls my lambda function for a view counter
function updateViewCounter() {
	// Check if the current URL includes 'resume_home.html'
	if (window.location.href.includes('resume_contact.html')) {
		const increment = !localStorage.getItem('counted');

		// Depending on the `increment` value, we append a query parameter to our API call
		fetch(
			`https://5jbn8lba14.execute-api.us-east-1.amazonaws.com/default/ResumeVisitorCount?increment=${increment}`
		)
			.then((response) => response.json())
			.then((data) => {
				const viewCount = data.viewCount;
				const counterDisplayElement = document.getElementById('counterDisplay');
				if (counterDisplayElement) {
					counterDisplayElement.innerText = `Total site visits: ${viewCount}`;
				}

				// Mark the visitor as counted
				if (increment) {
					localStorage.setItem('counted', 'true');
				}
			})
			.catch((error) => console.error('Error fetching view count:', error));
	}
}

// Call the function when the window loads
window.addEventListener('load', updateViewCounter);
