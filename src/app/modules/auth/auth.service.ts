import { StatusCodes } from "http-status-codes";
import config from "../../config";
import AppError from "../../errors/appError";
import { IImageFile } from "../../interface/IImageFile";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (payload: TUser, image: IImageFile) => {
  const register = {
    ...payload,
    image: image?.path,
  };
  const userData = await User.create(register);
  const jwtPayload = {
    _id: userData?._id,
    email: userData?.email,
    role: userData?.role,
  };
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "7d",
  });

  return {
    accessToken: token,
  };
};
const loginUser = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User is not exists!");
  }
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  );
  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Invalid Credentials!");
  }
  const jwtPayload = {
    _id: user?._id,
    email: user?.email,
    role: user?.role,
  };
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "7d",
  });
  return {
    accessToken: token,
  };
};

export const AuthServices = {
  registerUser,
  loginUser,
};
