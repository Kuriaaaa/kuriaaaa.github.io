import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // One sentence a recruiter can read in five seconds.
    summary: z.string(),
    kind: z.enum(['experience', 'product', 'client', 'academic', 'research']),
    status: z.string(),
    sector: z.string(),
    stage: z.enum(['live', 'pilot', 'building', 'engagement', 'complete', 'research']),
    // Short label for the homepage systems map.
    short: z.string().optional(),
    // Handwritten margin note beside the title. Only real, publishable results.
    note: z.string().optional(),
    year: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { work };
