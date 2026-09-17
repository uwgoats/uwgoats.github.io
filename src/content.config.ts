import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/logs' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      phase: z.string().optional(),
      coverImage: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .default([]),
      draft: z.boolean().default(false),
    }),
});

const references = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/references' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['video', 'paper', 'project', 'article', 'other']),
    url: z.string().url().optional(),
    author: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { logs, references };
