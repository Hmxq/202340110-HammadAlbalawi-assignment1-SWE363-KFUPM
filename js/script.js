// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after a nav link is clicked
navLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Dark / Light Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const THEME_KEY = 'portfolio-theme';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Restore saved theme, falling back to the user's system preference
const savedTheme = localStorage.getItem(THEME_KEY);
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});

// ===== Greeting Message Based on Time of Day =====
const greetingEl = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = 'Welcome';

if (hour < 12) {
  greetingText = 'Good morning! 👋';
} else if (hour < 18) {
  greetingText = 'Good afternoon! 👋';
} else {
  greetingText = 'Good evening! 👋';
}

greetingEl.textContent = greetingText;

// ===== Contact Form Interaction (no backend) =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formStatus.textContent = 'Please fill in all fields correctly.';
    formStatus.style.color = '#e11d48';
    return;
  }

  const name = document.getElementById('name').value.trim();
  formStatus.style.color = 'var(--color-primary)';
  formStatus.textContent = `Thanks, ${name}! Your message has been noted (demo only, no backend connected).`;
  contactForm.reset();
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();
