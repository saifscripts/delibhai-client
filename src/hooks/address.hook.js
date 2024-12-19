import {
  getDistricts,
  getUnions,
  getUpazilas,
  getVillages,
} from '@/services/address.service';
import { useQuery } from '@tanstack/react-query';

export const useGetDistricts = (id) => {
  const result = useQuery({
    queryKey: ['DISTRICTS', id],
    queryFn: async () => await getDistricts(id),
    enabled: !!id,
  });

  const districts = result?.data || [];

  return { ...result, districts };
};

export const useGetUpazilas = (id) => {
  const result = useQuery({
    queryKey: ['UPAZILAS', id],
    queryFn: async () => await getUpazilas(id),
    enabled: !!id,
  });

  const upazilas = result?.data || [];

  return { ...result, upazilas };
};

export const useGetUnions = (id) => {
  const result = useQuery({
    queryKey: ['UNIONS', id],
    queryFn: async () => await getUnions(id),
    enabled: !!id,
  });

  const unions = result?.data || [];

  return { ...result, unions };
};

export const useGetVillages = (id) => {
  const result = useQuery({
    queryKey: ['VILLAGES', id],
    queryFn: async () => await getVillages(id),
    enabled: !!id,
  });

  const villages = result?.data || [];

  return { ...result, villages };
};
