import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      kind: z.string(),
      year: z.string(),
      status: z.string(),
      role: z.string(),
      stack: z.array(z.string()),
      order: z.number(),
      theme: z.enum(['emerald', 'amber', 'violet', 'cyan', 'rose']).default('emerald'),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string() })).default([]),
      highlight: z.object({ value: z.string(), label: z.string() }).optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
});

// One entry per published build video or write-up.
const builds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    project: z.string().optional(),
    video: z.url().optional(),
  }),
});

export const collections = { work, builds };
