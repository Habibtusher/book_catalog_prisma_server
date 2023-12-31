"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRelationalFieldsMapper = exports.BookRelationalFields = exports.BookSearchableFields = exports.BookFilterableFields = void 0;
exports.BookFilterableFields = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'categoryId',
];
exports.BookSearchableFields = ['title', 'author', 'genre'];
exports.BookRelationalFields = ['categoryId'];
exports.BookRelationalFieldsMapper = {
    categoryId: 'category',
};
