import isMobilePhone from "@/utils/validators/isMobilePhone";
import { z } from "zod";

export const ContactInfoSchema = z.object({
  contactNo1: z
    .string()
    .trim()
    .min(1, "Mobile number is required!")
    .refine(isMobilePhone, {
      message: "Invalid mobile number!",
    }),
  contactNo2: z
    .string()
    .trim()
    .transform((val) => (val === "" ? null : val))
    .refine((val) => val === null || isMobilePhone(val), {
      message: "Invalid mobile number!",
    })
    .nullable()
    .optional(),
  email: z
    .string()
    .transform((val) => (val === "" ? null : val))
    .refine(
      (val) => val === null || z.string().email().safeParse(val).success,
      {
        message: "Invalid email!",
      },
    )
    .nullable()
    .optional(),
  facebookURL: z
    .string()
    .transform((val) => (val === "" ? null : val))
    .refine((val) => val === null || z.string().url().safeParse(val).success, {
      message: "Invalid URL!",
    })
    .nullable()
    .optional(),
});
