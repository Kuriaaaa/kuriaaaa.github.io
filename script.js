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
contactForm.addEventListener('submit', () => {
  if (!contactForm.reportValidity()) return;
  document.querySelector('#form-status').textContent = 'Sending your message securely…';
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
});

const query = new URLSearchParams(window.location.search);
if (query.get('message') === 'sent') {
  document.querySelector('#form-status').textContent = 'Thank you. Your message has been sent successfully.';
}

document.querySelectorAll('[data-copy-email]').forEach(button => button.addEventListener('click', async () => {
  const email = button.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    button.querySelector('span').textContent = 'Copied';
    document.querySelector('#form-status').textContent = `${email} copied to your clipboard.`;
  } catch {
    document.querySelector('#form-status').textContent = `Email: ${email}`;
  }
}));

document.querySelectorAll('[data-contact-message]').forEach(link => link.addEventListener('click', () => {
  const message = document.querySelector('#contact-form textarea[name="message"]');
  message.value = link.dataset.contactMessage;
  window.setTimeout(() => message.focus(), 450);
}));

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
