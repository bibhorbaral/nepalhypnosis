import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    lang: z.string().default('en'),
    author: z.string().default('Archana Bibhor'),
    legacyNode: z.number().optional(),
    legacyAlias: z.string().optional(),
  }),
});

export const collections = { articles };