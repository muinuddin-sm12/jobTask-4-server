import { StatusCodes } from "http-status-codes";
import { IImageFile } from "../../interface/IImageFile";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUser(
    req.body,
    req.file as IImageFile
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User registerd successfully',
    data: result
  })
});
const loginUser = catchAsync(async(req, res) => {
    const result = await AuthServices.loginUser(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Usr logged in successfully!',
        data: result,
    })
})

export const AuthControllers = {
    register,
    loginUser
}
