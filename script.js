document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('navToggle');
const topnav = document.getElementById('topnav');

toggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('#mobileMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    topnav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
