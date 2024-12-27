import { z } from 'zod';

export const ServiceInfoSchema = z.object({
  serviceType: z
    .enum(['ব্যক্তিগত', 'ভাড়ায় চালিত'], {
      invalid_type_error: 'Invalid service type!',
    })
    .optional(),
  rentType: z
    .array(
      z.enum(['লোকাল', 'রিজার্ভ', 'কন্টাক্ট'], {
        invalid_type_error: 'Invalid rent type!',
      })
    )
    .optional(),
});
