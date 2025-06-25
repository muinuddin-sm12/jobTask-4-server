import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ContactServices } from "./contact.service";

const createContact = catchAsync(async(req, res) => {
    const result = await ContactServices.createContact(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Messege send successfully',
        data: result
    })
});
const getAllContact = catchAsync(async(req, res) => {
    const result = await ContactServices.getAllContact();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Contacts retrieved successfully',
        data: result
    })
})

export const ContactControllers = {
    createContact,
    getAllContact
}