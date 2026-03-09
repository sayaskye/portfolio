import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  language: z.string(),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = {
  projects: projectCollection,
};
