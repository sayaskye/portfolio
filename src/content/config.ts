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
  category: z.string(),
  id: z.string(),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const blogSchema = z.object({
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
  language: z.string(),
  category: z.string(),
  id: z.string(),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  location: z.string().optional(),
  displayDate: z.string(), // E.g. "2021 — Present"
  sortDate: z.coerce.date(), // For sorting
  icon: z.string().default('corporate_fare'),
  language: z.string(),
});

export type ExperienceFrontmatter = z.infer<typeof experienceSchema>;

const experienceCollection = defineCollection({
  type: 'content',
  schema: experienceSchema,
});

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
  experience: experienceCollection,
};
