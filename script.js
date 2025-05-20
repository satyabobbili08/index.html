// Toggle hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

// Typed.js animation
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Java Developer', 'Learner'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
