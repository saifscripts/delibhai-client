import { getMe } from '@/services/auth.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  getUser,
  removeAvatar,
  updateAvatar,
  updateRider,
} from '../services/user.service';

export const useGetUser = (id) => {
  const result = useQuery({
    queryKey: ['USER', id],
    queryFn: async () => await getUser(id),
  });

  const user = result?.data?.data;

  return { ...result, user };
};

export const useGetMe = () => {
  const result = useQuery({
    queryKey: ['ME'],
    queryFn: async () => await getMe(),
  });

  const user = result?.data?.data;

  return { ...result, user };
};

export const useUpdateRider = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['UPDATE_RIDER'],
    mutationFn: updateRider,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['ME'] });
        queryClient.invalidateQueries({ queryKey: ['USER'] });
        toast.success('Profile updated successfully');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['UPDATE_AVATAR'],
    mutationFn: updateAvatar,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['ME'] });
        queryClient.invalidateQueries({ queryKey: ['USER'] });
        toast.success('Avatar updated successfully');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useRemoveAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['REMOVE_AVATAR'],
    mutationFn: removeAvatar,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['ME'] });
        queryClient.invalidateQueries({ queryKey: ['USER'] });
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
