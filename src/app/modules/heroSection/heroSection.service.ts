import { IImageFile } from "../../interface/IImageFile";
import { THeroSection } from "./heroSection.interface";
import { HeroSection } from "./heroSection.model";

const createHeroSection = async (payload: THeroSection, image: IImageFile) => {
  const heroData = {
    ...payload,
    backgroundImage: image?.path,
  };
  const result = await HeroSection.create(heroData);
  return result;
};
const updateHeroSection = async (
  id: string,
  payload: Partial<THeroSection>,
  image: IImageFile
) => {
  const updatedData = {
    ...payload,
    backgroundImage: image?.path,
  };
  const result = await HeroSection.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return result;
};
const getHeroSection = async() => {
    const result = await HeroSection.find();
    return result;
}
export const HeroSectionServices = {
  createHeroSection,
  updateHeroSection,
  getHeroSection,
};
