import { StatusCodes } from "http-status-codes";
import { IImageFile } from "../../interface/IImageFile";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { HeroSectionServices } from "./heroSection.service";

const createHeroSection = catchAsync(async (req, res) => {
  const result = await HeroSectionServices.createHeroSection(
    req.body,
    req.file as IImageFile
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Hero Section created successfully",
    data: result,
  });
});
const updateHeroSection = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HeroSectionServices.updateHeroSection(
    id,
    req.body,
    req.file as IImageFile
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Hero seciton updated successfully",
    data: result,
  });
});
const getHeroSection = catchAsync(async(req, res) => {
    const result = await HeroSectionServices.getHeroSection();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Hero section retrieve successfully',
        data: result
    })
})

export const HeroSectionControllers = {
  createHeroSection,
  updateHeroSection,
  getHeroSection,
};
