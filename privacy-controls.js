const CONSENT_KEY = 'jk-portfolio-consent-v1';
const cookieBanner = document.querySelector('#cookie-banner');
const cookieDialog = document.querySelector('#cookie-dialog');
const analyticsConsent = document.querySelector('#analytics-consent');
const clarityProjectId = window.PORTFOLIO_ANALYTICS?.clarityProjectId?.trim();
let clarityLoaded = false;

function loadClarity() {
  if (!clarityProjectId || clarityLoaded) return;
  clarityLoaded = true;
  window.clarity = window.clarity || function clarityQueue() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityProjectId)}`;
  script.addEventListener('load', () => window.clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: 'granted'
  }));
  document.head.append(script);
}

function readStoredConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY));
  } catch {
    try { localStorage.removeItem(CONSENT_KEY); } catch { /* storage unavailable */ }
    return null;
  }
}

function writeStoredConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch { /* storage blocked: the choice still applies for this page view */ }
}

function saveConsent(analytics) {
  writeStoredConsent({ analytics, updated: new Date().toISOString() });
  cookieBanner.hidden = true;
  if (cookieDialog.open) cookieDialog.close();
  if (analytics) loadClarity();
  else if (window.clarity) window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' });
}

const storedConsent = readStoredConsent();
if (storedConsent) {
  analyticsConsent.checked = Boolean(storedConsent.analytics);
  if (storedConsent.analytics) loadClarity();
} else {
  cookieBanner.hidden = false;
}

document.querySelectorAll('[data-cookie-accept]').forEach(button => button.addEventListener('click', () => saveConsent(true)));
document.querySelectorAll('[data-cookie-reject]').forEach(button => button.addEventListener('click', () => saveConsent(false)));
document.querySelectorAll('[data-cookie-manage], [data-cookie-settings]').forEach(button => button.addEventListener('click', () => {
  cookieBanner.hidden = true;
  cookieDialog.showModal();
}));
document.querySelector('[data-cookie-save]').addEventListener('click', () => saveConsent(analyticsConsent.checked));
document.querySelector('[data-cookie-close]').addEventListener('click', () => cookieDialog.close());
