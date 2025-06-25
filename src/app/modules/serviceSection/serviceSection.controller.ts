import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceSectionServices } from "./serviceSection.service";

const createService = catchAsync(async (req, res) => {
  const result = await ServiceSectionServices.createService(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});
const getServices = catchAsync(async (req, res) => {
  const result = await ServiceSectionServices.getAllService();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Services retrieved successfully",
    data: result,
  });
});
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceSectionServices.updateService(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});
export const ServiceSectionController = {
  createService,
  getServices,
  updateService,
};
