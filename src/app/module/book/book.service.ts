import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
    BookRelationalFields,
    BookRelationalFieldsMapper,
    BookSearchableFields,
} from './book.constant';
import { IBookFilterRequest } from './book.interface';

const insertIntoDB = async (payload: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data: payload,
    include: {
      category: true,
    },
  });
  return result;
};
const getAllFromDB = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
  const andCondition = [];

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map(key => {
        if (BookRelationalFields.includes(key)) {
          return {
            [BookRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          console.log('in else', filterData);
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }
  //   if (Object.keys(filterData).length > 0) {
  //     andCondition.push({
  //       AND: Object.keys(filterData).map(key => {
  //         console.log('in else', filterData);
  //         return {
  //           [key]: {
  //             equals: (filterData as any)[key],
  //           },
  //         };
  //       }),
  //     });
  //   }

  if (searchTerm) {
    andCondition.push({
      OR: BookSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
    include: {
      category: true,
    },
  });
  const total = await prisma.book.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
const getBooksByCategory = async (id: string, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
    include: {
      category: true,
    },
  });
  const total = await prisma.book.count({
    where: {
      categoryId: id,
    },
  });
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
const getBookById = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },

    include: {
      category: true,
    },
  });

  return result;
};
const update = async (id: string, payload: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,

    include: {
      category: true,
    },
  });

  return result;
};
const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  return result;
};
export const BookService = {
  insertIntoDB,
  getAllFromDB,
  getBooksByCategory,
  getBookById,
  deleteBook,
  update,
};
