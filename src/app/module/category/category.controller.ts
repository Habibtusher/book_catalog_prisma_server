import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: result,
    success: true,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category retrived successfully',
    data: result,
    success: true,
  });
});
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category retrived successfully',
    data: result,
    success: true,
  });
});
const update = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.update(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category updated successfully',
    data: result,
    success: true,
  });
});
const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Category deleted successfully',
    data: result,
    success: true,
  });
});

export const CategoryController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  update,
  deleteCategory,
};
