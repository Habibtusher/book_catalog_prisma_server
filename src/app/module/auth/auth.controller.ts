import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body };

  const result = await AuthService.insertIntoDb(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});
const login = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body };

  const result = await AuthService.login(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully!',
    token: result.token,
  });
});


export const AuthController = {
    insertIntoDb,
    login
}