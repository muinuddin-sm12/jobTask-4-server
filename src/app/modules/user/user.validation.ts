import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be 6 or more characters long" })
      .max(20, { message: "Password must be 20 or fewer characters long" }),
  }),
});

export const UserValidations ={
    createUserValidationSchema,
}