// Single source of truth for identity and contact details.
export const site = {
  name: 'Chege John Brian Kuria',
  role: 'Software Developer',
  location: 'Kiambu, Kenya',
  availability: 'Open to junior developer roles, internships and freelance projects — Nairobi or remote.',
  description:
    'Chege John Brian Kuria is a software developer in Kiambu, Kenya, building web systems businesses run on every day: gym management, car sales and ERP data.',
  email: 'johnkuria6996@gmail.com',
  whatsapp: 'https://wa.me/254717246699',
  github: 'https://github.com/Kuriaaaa',
  linkedin: 'https://www.linkedin.com/in/chege-john-brian-kuria-7909b9426/',
  // FormSubmit endpoint. Swap the email for the hashed alias from the FormSubmit
  // activation email so the address is not scrapeable from the page source.
  formAction: 'https://formsubmit.co/johnkuria6996@gmail.com',
};

export const kindLabel = {
  product: 'Product',
  client: 'Client project',
  academic: 'Academic',
  research: 'Research',
} as const;
