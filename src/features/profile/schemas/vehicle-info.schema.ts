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
  vehicleSubType: z.string().trim(),
  vehicleBrand: z.string().trim(),
  vehicleModel: z.string().trim(),
  vehicleNumber: z.string().trim(),
  vehicleName: z.string().trim(),
});
