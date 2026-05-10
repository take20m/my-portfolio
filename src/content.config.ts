import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const works = defineCollection({
  loader: glob({
    base: "./src/content/works",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      roles: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      thumbnail: image(),
      thumbnailAlt: z.string().optional(),
      repoUrl: z.url().optional(),
      liveUrl: z.url().optional(),
      order: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      thumbnail: image().optional(),
      thumbnailAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works, blog };
