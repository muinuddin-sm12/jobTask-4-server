import { model, Schema } from "mongoose";
import { THeroSection } from "./heroSection.interface";

const heroSectionSchema = new Schema<THeroSection>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    subTitle: {
      type: String,
      trim: true,
      required: [true, "SubTitle is required"],
    },
    backgroundImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const HeroSection = model<THeroSection>(
  "HeroSection",
  heroSectionSchema
);
