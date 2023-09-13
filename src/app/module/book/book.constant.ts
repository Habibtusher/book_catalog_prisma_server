export const BookFilterableFields = [
  'searchTerm',
  'minPrice',
  'maxPrice',
  'categoryId',
];
export const BookSearchableFields = ['title', 'author', 'genre'];
export const BookRelationalFields: string[] = ['categoryId'];
export const BookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
