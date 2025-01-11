import { z } from 'zod';

export const StrictAddressSchema = z.object({
  division: z.object(
    {
      _id: z.string(),
      title: z.string(),
    },
    { required_error: 'Division is required' }
  ),
  district: z.object(
    {
      _id: z.string(),
      title: z.string(),
    },
    { required_error: 'District is required' }
  ),
  upazila: z.object(
    {
      _id: z.string(),
      title: z.string(),
    },
    { required_error: 'Upazila is required' }
  ),
  union: z.object(
    {
      _id: z.string(),
      title: z.string(),
    },
    { required_error: 'Union is required' }
  ),
  village: z
    .object({
      _id: z.string(),
      title: z.string(),
    })
    .optional(),
});

export const FlexibleAddressSchema = z.object({
  division: z
    .object({
      _id: z.string(),
      title: z.string(),
    })
    .optional(),
  district: z
    .object({
      _id: z.string(),
      title: z.string(),
    })
    .optional(),
  upazila: z
    .object({
      _id: z.string(),
      title: z.string(),
    })
    .optional(),
  union: z
    .object({
      _id: z.string(),
      title: z.string(),
    })
    .optional(),
  village: z
    .object({
      _id: z.string(),
      title: z.string(),
    })
    .optional(),
});

export const EditAddressSchema = z.object({
  presentAddress: FlexibleAddressSchema.optional(),
  permanentAddress: FlexibleAddressSchema.optional(),
});

export const EditMainStationSchema = z.object({
  mainStation: StrictAddressSchema.optional(),
});

export const AddServiceAreaSchema = z.object({
  serviceArea: FlexibleAddressSchema,
});

export const UpdateServiceAreaSchema = z.object({
  address: FlexibleAddressSchema,
});
