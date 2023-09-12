import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const getAllFromDB = catchAsync(async (req:Request,res:Response) => {
    const result = await UserService.getAllFromDB()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User fetched successfully!",
        data: result
    })
})
const findById = catchAsync(async (req:Request,res:Response) => {
    const  {id} = req.params
    const result = await UserService.findById(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User fetched successfully!",
        data: result
    })
})
const update = catchAsync(async (req:Request,res:Response) => {
    const  {id} = req.params
    
    const result = await UserService.update(id,req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User updated successfully!",
        data: result
    })
})
const deleteUser = catchAsync(async (req:Request,res:Response) => {
    const  {id} = req.params
    
    const result = await UserService.deleteUser(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User deleted successfully!",
        data: result
    })
})
export const UserController = {
    getAllFromDB,
    findById,
    update,
    deleteUser
}