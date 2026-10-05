// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    lang: z.string().default('en'),
    author: z.string().default('Archana Bibhor'),
    description: z.string().optional(),
    reviewedBy: z.string().optional(),
    datePublished: z.string().optional(),
    dateModified: z.string().optional(),
    evidenceLevel: z.string().optional(),
    contentType: z.string().optional(),
    status: z.string().default('published'),
    legacyNode: z.number().optional(),
    legacyAlias: z.string().optional(),
  }),
});

export const collections = { articles };