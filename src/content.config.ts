import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    emoji: z.string().default('📝'),
    gradient: z.string().default('linear-gradient(135deg, #667eea, #764ba2)'),
  }),
});

export const collections = { blog };
