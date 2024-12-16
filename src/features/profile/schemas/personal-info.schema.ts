import { isNID } from "@/utils/isNID";
import { z } from "zod";

export const ProfileInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long!")
    .optional(),
  fatherName: z
    .string()
    .trim()
    .refine((value) => value === "" || value.length > 3, {
      message: "Father's name must be at least 3 characters long!",
    })
    .optional(),
  gender: z
    .enum(["পুরুষ", "মহিলা", "অন্যান্য"], {
      invalid_type_error: "Gender must be পুরুষ/মহিলা/অন্যান্য!",
    })
    .optional(),
  bloodGroup: z
    .enum(["এ+", "বি+", "এবি+", "ও+", "এ-", "বি-", "এবি-", "ও-"], {
      invalid_type_error: "Invalid blood group!",
    })
    .optional(),
  dateOfBirth: z.string().date("Invalid date of birth!").optional(),
  nid: z
    .string()
    .refine((value) => isNID(value), {
      message: "Invalid NID number!",
    })
    .optional(),
});
