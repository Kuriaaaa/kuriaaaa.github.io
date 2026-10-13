// Single source of truth for the personal brand.
// When a new social account is created, fill in its URL here and it appears
// across the header, footer, contact page and /links automatically.

export const site = {
  name: 'John Kuria',
  legalName: 'Chege John Brian Kuria',
  handle: 'johnkuriadev',
  role: 'Software Developer',
  location: 'Nairobi, Kenya',
  tagline: 'I build software for real operations.',
  description:
    'John Kuria is a software developer in Nairobi building web apps, APIs and databases for businesses that run on them.',
  url: 'https://kuriaaaa.github.io',
  email: 'johnkuria6996@gmail.com',
  whatsapp: '254717246699',
  education: 'BSc Software Development, KCA University (graduating March 2027)',
};

export type Social = { id: string; label: string; url: string };

// Leave url empty until the account exists — empty entries are hidden.
export const socials: Social[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/Kuriaaaa' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/chege-john-brian-kuria-7909b9426/' },
  { id: 'youtube', label: 'YouTube', url: '' },
  { id: 'tiktok', label: 'TikTok', url: '' },
  { id: 'instagram', label: 'Instagram', url: '' },
  { id: 'x', label: 'X', url: '' },
  { id: 'kaggle', label: 'Kaggle', url: '' },
  { id: 'whatsapp', label: 'WhatsApp', url: `https://wa.me/${site.whatsapp}` },
].filter((s) => s.url);

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
