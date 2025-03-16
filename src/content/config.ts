import { z, defineCollection, type CollectionEntry } from 'astro:content'

// Define the news collection schema
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.union([
      z.string().transform((str) => new Date(str)),
      z.date()
    ]),
    category: z.string(),
    featured: z.boolean().optional().default(false),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Define the tools collection schema
const toolsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    rating: z.number().min(0).max(5).optional(),
    featured: z.boolean().optional().default(false),
    imageUrl: z.string().optional(),
    pricing: z.string().optional(),
    website: z.string().url().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Define the learn collection schema
const learnCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['beginner', 'intermediate', 'advanced', 'prompts']),
    duration: z.string().optional(),
    featured: z.boolean().default(false),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
  })
});

export const collections = {
  news: newsCollection,
  tools: toolsCollection,
  learn: learnCollection,
}

export type News = CollectionEntry<'news'>
export type Tools = CollectionEntry<'tools'>
export type Learn = CollectionEntry<'learn'>

// Add a ContentItem type that can represent any content piece
export type ContentItem = News | Tools | Learn
