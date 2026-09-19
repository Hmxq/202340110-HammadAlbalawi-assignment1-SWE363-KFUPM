// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// ===== Dark / Light Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});

// ===== Greeting Message Based on Time of Day =====
const greetingEl = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = 'Welcome';

if (hour < 12) {
  greetingText = 'Good morning!';
} else if (hour < 18) {
  greetingText = 'Good afternoon!';
} else {
  greetingText = 'Good evening!';
}

greetingEl.textContent = greetingText;

// ===== Contact Form Interaction (no backend) =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    formStatus.textContent = 'Please fill in all fields.';
  } else {
    formStatus.textContent = 'Thanks, ' + name + '! Your message has been noted (demo only, no backend connected).';
    contactForm.reset();
  }
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();
