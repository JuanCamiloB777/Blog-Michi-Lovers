
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });


const toggle = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');
toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('is-open');
  menu.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Cerrar menu' : 'Abrir menu de navegacion');
});
menu.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});


const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const submitBtn = document.getElementById('contact-submit-btn');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  setTimeout(() => {
    form.style.display = 'none';
    success.classList.add('is-visible');
    success.focus();
  }, 1200);
});
