import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    // One sentence a recruiter can read in five seconds.
    summary: z.string(),
    kind: z.enum(['experience', 'product', 'client', 'academic', 'research']),
    status: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { work };
