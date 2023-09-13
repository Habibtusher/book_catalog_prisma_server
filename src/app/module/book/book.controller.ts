import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { BookFilterableFields } from './book.constant';
import { BookService } from './book.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, BookFilterableFields);
  const options = pick(req.query, paginationFields);
  const result = await BookService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrived successfully',
    data: result.data,
    meta: result.meta,
  });
});
const getBooksByCategory = catchAsync(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const options = pick(req.query, paginationFields);
  const result = await BookService.getBooksByCategory(categoryId, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books with associated category data fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});
const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookService.getBookById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrived successfully',
    data: result,
  });
});
const update = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookService.update(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookService.deleteBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});
export const BookController = {
  insertIntoDB,
  getAllFromDB,
  getBooksByCategory,
  getBookById,
  update,
  deleteBook,
};
