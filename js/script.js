const toggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backdrop = document.querySelector('.menu-backdrop');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggle.classList.toggle('is-active');
  backdrop.classList.toggle('active');
});

// Close when clicking a link
document.querySelectorAll('.nav-item a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggle.classList.remove('is-active');
    backdrop.classList.remove('active');
  });
});