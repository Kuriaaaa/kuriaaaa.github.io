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

const architectureCanvas = document.querySelector('#architecture-canvas');
const architectureContext = architectureCanvas?.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const architecturePointer = { x: -1000, y: -1000 };
let architectureVisible = true;

function sizeArchitectureCanvas() {
  if (!architectureCanvas || !architectureContext) return;
  const bounds = architectureCanvas.getBoundingClientRect();
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  architectureCanvas.width = Math.max(1, Math.round(bounds.width * scale));
  architectureCanvas.height = Math.max(1, Math.round(bounds.height * scale));
  architectureContext.setTransform(scale, 0, 0, scale, 0, 0);
}

function drawArchitecture(time = 0) {
  if (!architectureCanvas || !architectureContext) return;
  const width = architectureCanvas.clientWidth;
  const height = architectureCanvas.clientHeight;
  const pulse = reduceMotion ? 0 : Math.sin(time / 900) * 3;
  const points = [
    { x: width * .08, y: height * .2 },
    { x: width * .28, y: height * .72 },
    { x: width * .53, y: height * .28 },
    { x: width * .72, y: height * .77 },
    { x: width * .91, y: height * .32 }
  ];

  architectureContext.clearRect(0, 0, width, height);
  architectureContext.lineWidth = 1;
  architectureContext.strokeStyle = 'rgba(47, 107, 87, .16)';
  architectureContext.beginPath();
  points.forEach((point, index) => {
    if (index === 0) architectureContext.moveTo(point.x, point.y);
    else architectureContext.lineTo(point.x, point.y);
  });
  architectureContext.stroke();

  points.forEach((point, index) => {
    const radius = 4 + ((index % 2) ? pulse : -pulse) * .22;
    architectureContext.beginPath();
    architectureContext.arc(point.x, point.y, radius, 0, Math.PI * 2);
    architectureContext.fillStyle = index === 2 ? 'rgba(169, 79, 47, .78)' : 'rgba(216, 131, 80, .58)';
    architectureContext.fill();
    const distance = Math.hypot(point.x - architecturePointer.x, point.y - architecturePointer.y);
    if (distance < 230) {
      architectureContext.beginPath();
      architectureContext.moveTo(point.x, point.y);
      architectureContext.lineTo(architecturePointer.x, architecturePointer.y);
      architectureContext.strokeStyle = `rgba(47, 107, 87, ${Math.max(0, .24 - distance / 1100)})`;
      architectureContext.stroke();
    }
  });
}

function animateArchitecture(time) {
  if (architectureVisible) drawArchitecture(time);
  window.requestAnimationFrame(animateArchitecture);
}

if (architectureCanvas && architectureContext) {
  sizeArchitectureCanvas();
  window.addEventListener('resize', () => {
    sizeArchitectureCanvas();
    if (reduceMotion) drawArchitecture();
  });
  architectureCanvas.closest('.hero').addEventListener('pointermove', event => {
    const bounds = architectureCanvas.getBoundingClientRect();
    architecturePointer.x = event.clientX - bounds.left;
    architecturePointer.y = event.clientY - bounds.top;
  });
  new IntersectionObserver(([entry]) => {
    architectureVisible = entry.isIntersecting;
  }).observe(architectureCanvas);
  if (reduceMotion) drawArchitecture();
  else window.requestAnimationFrame(animateArchitecture);
}

const observedSections = [...document.querySelectorAll('main section[id]')];
const navigationLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.filter(entry => entry.isIntersecting).forEach(entry => {
    navigationLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
observedSections.forEach(section => sectionObserver.observe(section));

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
