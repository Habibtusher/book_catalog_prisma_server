import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const generateOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await OrderService.generateOrder(req.body.orderedBooks, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully generated order',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const user = req.user;
  const result = await OrderService.getAllFromDB(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrived successfully!',
    data: result,
  });
});

export const OrderController = {
  generateOrder,
  getAllFromDB,

};
