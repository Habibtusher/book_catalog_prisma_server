import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    author: z.string({
      required_error: 'author name is required',
    }),
    price: z
      .number({
        required_error: 'price is required',
      })
      .multipleOf(0.01),
    genre: z.string({
      required_error: 'genre is required',
    }),
    publicationDate: z.string({
      required_error: 'publication date  is required',
    }),

    categoryId: z.string({
      required_error: 'category is required',
    }),
  }),
});

export const BookValidation = {
  create,
};
