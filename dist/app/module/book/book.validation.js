"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        author: zod_1.z.string({
            required_error: 'author name is required',
        }),
        price: zod_1.z
            .number({
            required_error: 'price is required',
        })
            .multipleOf(0.01),
        genre: zod_1.z.string({
            required_error: 'genre is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'publication date  is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'category is required',
        }),
    }),
});
exports.BookValidation = {
    create,
};
