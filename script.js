const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const name = String(data.get('name') || '');
  const email = String(data.get('email') || '');
  const message = String(data.get('message') || '');
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(
    `Hello John,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
  );

  document.querySelector('#form-status').textContent =
    'Your email application is opening with the message prepared.';
  window.location.href =
    `mailto:johnkuria6996@gmail.com?subject=${subject}&body=${body}`;
});

const rolePreviewImage = document.querySelector('#role-preview-image');
const rolePreviewLink = document.querySelector('#role-preview-link');
const rolePreviewCaption = document.querySelector('#role-preview-caption');
const roleTabs = document.querySelectorAll('[data-role-image]');

roleTabs.forEach(button => button.addEventListener('click', () => {
  const role = button.textContent.trim();
  const image = button.dataset.roleImage;
  const label = button.dataset.roleLabel;

  roleTabs.forEach(tab => {
    tab.classList.toggle('active', tab === button);
    tab.setAttribute('aria-pressed', String(tab === button));
  });
  rolePreviewImage.src = image;
  rolePreviewImage.alt = `GymFlow ${role.toLowerCase()} workspace demonstration`;
  rolePreviewLink.href = image;
  rolePreviewLink.setAttribute('aria-label', `Open full ${role.toLowerCase()} workspace screenshot`);
  rolePreviewCaption.textContent = label;
}));
