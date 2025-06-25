import { z } from "zod";

const createContactValidationSchema = z.object({
    body:z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string().optional()
    })
})

export const ContactValidations = {
    createContactValidationSchema
}