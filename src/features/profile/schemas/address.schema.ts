import { z } from 'zod';

export const AddressSchema = z.object({
  division: z.string().optional(),
  district: z.string().optional(),
  upazila: z.string().optional(),
  union: z.string().optional(),
  village: z.string().optional(),
});
