import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      short: z.string().optional(),
      summary: z.string(),
      kind: z.string(),
      year: z.string(),
      status: z.string(),
      sector: z.string(),
      stage: z.enum(['live', 'pilot', 'building', 'engagement']),
      source: z.enum(['public', 'private']).default('private'),
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

      // Depth sections, rendered after the written case study.
      metrics: z.array(z.object({ value: z.coerce.string(), label: z.string() })).default([]),
      architecture: z
        .object({
          caption: z.string(),
          layers: z.array(z.object({ name: z.string(), items: z.array(z.string()) })),
        })
        .optional(),
      decisions: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
      timeline: z.array(z.object({ when: z.string(), title: z.string(), done: z.boolean().default(true) })).default([]),
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
