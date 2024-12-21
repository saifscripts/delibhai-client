import { isNID } from '@/utils/isNID';
import { z } from 'zod';

export const PersonalInfoSchema = z.object({
  name: z
    .string({ required_error: 'Name is required!' })
    .trim()
    .min(1, 'Name is required!')
    .min(3, 'Name must be at least 3 characters long!'),
  fatherName: z
    .string()
    .trim()
    .transform((val) => (val === '' ? null : val))
    .refine((value) => value === null || value.length > 3, {
      message: "Father's name must be at least 3 characters long!",
    })
    .nullable()
    .optional(),
  gender: z
    .string()
    .transform((val) => (val === '' ? null : val))
    .refine(
      (val) =>
        val === null ||
        z.enum(['পুরুষ', 'মহিলা', 'অন্যান্য']).safeParse(val).success,
      {
        message: 'Gender must be পুরুষ/মহিলা/অন্যান্য!',
      }
    )
    .nullable()
    .optional(),
  bloodGroup: z
    .string()
    .transform((val) => (val === '' ? null : val))
    .refine(
      (val) =>
        val === null ||
        z
          .enum(['এ+', 'বি+', 'এবি+', 'ও+', 'এ-', 'বি-', 'এবি-', 'ও-'])
          .safeParse(val).success,
      {
        message: 'Invalid blood group!',
      }
    )
    .nullable()
    .optional(),
  dateOfBirth: z
    .string()
    .transform((val) => (val === '' ? null : val))
    .refine((val) => val === null || z.string().date().safeParse(val).success, {
      message: 'Invalid date of birth!',
    })
    .nullable()
    .optional(),
  nid: z
    .string()
    .transform((val) => (val === '' ? null : val))
    .refine((val) => val === null || isNID(val), {
      message: 'Invalid NID number!',
    })
    .nullable()
    .optional(),
});
