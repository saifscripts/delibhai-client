import { z } from 'zod';

export const ServiceTimeSchema = z.object({
  serviceTimeSlots: z.array(
    z.object({
      start: z.string(),
      end: z.string(),
    })
  ),
});
