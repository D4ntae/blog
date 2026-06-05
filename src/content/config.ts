import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const collections = {
  blog: defineCollection({ type: 'content', schema: postSchema }),
  research: defineCollection({ type: 'content', schema: postSchema }),
  notes: defineCollection({
    type: 'content',
    schema: postSchema.extend({
      parent: z.string().optional(),
      order: z.number().default(0),
    }),
  }),
  projects: defineCollection({
    type: 'content',
    schema: postSchema.extend({
      github: z.string().url().optional(),
      url: z.string().url().optional(),
      status: z.enum(['active', 'archived', 'wip']).default('active'),
      icon: z.enum(['github', 'gitlab', 'npm', 'web', 'terminal']).default('github'),
    }),
  }),
};
