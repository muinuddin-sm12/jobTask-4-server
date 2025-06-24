import { z } from "zod";

const createHeroSectionSchema = z.object({
    body: z.object({
        title: z.string(),
        subTitle: z.string(),
    })
});
const updateHeroSectionSchema = z.object({
    body: z.object({
        title: z.string().optional(),
        subTitle: z.string().optional(),
        backgroundImage: z.string().optional(),
    })
});

export const HeroSecitonValidations ={
    createHeroSectionSchema,
    updateHeroSectionSchema
}