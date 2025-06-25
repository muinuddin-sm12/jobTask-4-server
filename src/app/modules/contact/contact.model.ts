import { model, Schema } from "mongoose";
import { TContact } from "./contact.interface";

const contactSchema = new Schema<TContact>({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    message: {
        type: String,
    }
});

export const Contact = model<TContact>("Contact", contactSchema)