import { TServiceSection } from "./serviceSection.interface";
import { ServiceSection } from "./serviceSection.model";

const createService = async (payload: TServiceSection) => {
  const result = await ServiceSection.create(payload);
  return result;
};
const updateService = async (id: string, payload: Partial<TServiceSection>) => {
  const result = await ServiceSection.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
const getAllService = async () => {
  const result = await ServiceSection.find();
  return result;
};
export const ServiceSectionServices = {
  createService,
  updateService,
  getAllService,
};
