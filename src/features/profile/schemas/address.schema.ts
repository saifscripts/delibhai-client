import { z } from 'zod';

const AddressFieldSchema = z.object({
  _id: z.string(),
  title: z.string(),
});

export const AddressSchema = z.object({
  division: AddressFieldSchema.optional(),
  district: AddressFieldSchema.optional(),
  upazila: AddressFieldSchema.optional(),
  union: AddressFieldSchema.optional(),
  village: AddressFieldSchema.optional(),
});

export const EditAddressSchema = z.object({
  presentAddress: AddressSchema.optional(),
  permanentAddress: AddressSchema.optional(),
});
