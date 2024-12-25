import vehicles from '@/data/vehicles';
import { z } from 'zod';

const vehicleTitles = vehicles.map(({ title }) => title) as [
  string,
  ...string[],
];

export const VehicleInfoSchema = z.object({
  vehicleType: z.enum(vehicleTitles, {
    message: 'Invalid vehicle type!',
  }),
  vehicleSubType: z.string().trim().optional(),
  vehicleBrand: z.string().trim().optional(),
  vehicleModel: z.string().trim().optional(),
  vehicleNumber: z.string().trim().optional(),
  vehicleName: z.string().trim().optional(),
});
