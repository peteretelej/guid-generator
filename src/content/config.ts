import { z, defineCollection } from 'astro:content';

const guideCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      lang: z.string(),
    }),
  });

  export const collections = {
    'guide': guideCollection,
  };