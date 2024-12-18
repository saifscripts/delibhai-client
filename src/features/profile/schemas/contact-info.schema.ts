import isMobilePhone from "@/utils/validators/isMobilePhone";
import { z } from "zod";

export const ContactInfoSchema = z.object({
  contactNo1: z.string().trim().refine(isMobilePhone, {
    message: "Invalid mobile number!",
  }),
  contactNo2: z
    .string()
    .trim()
    .refine(isMobilePhone, {
      message: "Invalid mobile number!",
    })
    .optional(),
  email: z.string().email("Invalid email!").optional(),
  facebookURL: z.string().url("Invalid URL!").optional(),
});
