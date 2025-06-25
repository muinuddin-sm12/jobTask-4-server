import { model, Schema } from "mongoose";
import { TServiceSection } from "./serviceSection.interface";

const serviceSectionSchema = new Schema<TServiceSection>({
    title: {
        type: String,
        required: [true, 'Service title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
}, {
    timestamps: true
})

export const ServiceSection = model<TServiceSection>('ServiceSection', serviceSectionSchema);
