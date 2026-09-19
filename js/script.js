// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
let navOpen = false;

navToggle.addEventListener('click', function () {
  navOpen = !navOpen;
  navLinks.className = navOpen ? 'nav-links open' : 'nav-links';
});

// ===== Dark / Light Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
let darkMode = false;

themeToggle.addEventListener('click', function () {
  darkMode = !darkMode;
  document.body.className = darkMode ? 'dark-mode' : '';
  themeToggle.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
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
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameField.value;
  const email = emailField.value;
  const message = messageField.value;

  if (name === '' || email === '' || message === '') {
    formStatus.textContent = 'Please fill in all fields.';
  } else {
    formStatus.textContent = 'Thanks, ' + name + '! Your message has been noted (demo only, no backend connected).';
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();
