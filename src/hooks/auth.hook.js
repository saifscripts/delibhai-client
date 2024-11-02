import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../contexts/auth.context";
import {
  getMe,
  login,
  registerRider,
  resendOTP,
  verifyOTP,
} from "../services/auth.service";

// Register Rider
export const useRegisterRider = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["REGISTER_RIDER"],
    mutationFn: registerRider,
    onSuccess: (data) => {
      if (data?.success) {
        navigate("/otp-verification", {
          state: {
            _id: data?.data?._id,
            otp: data?.data?.otp,
          },
        });
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// Login
export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  return useMutation({
    mutationKey: ["LOGIN"],
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.success) {
        navigate(`/profile/${data?.data?.user?._id}`);
        setAuthUser(data?.data?.accessToken);
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// Me
export const useMe = () => {
  const result = useQuery({
    queryKey: ["ME"],
    queryFn: async () => await getMe(),
  });

  const user = result?.data?.data;

  return { ...result, user };
};

// Verify OTP
export const useVerifyOTP = () => {
  const queryClient = useQueryClient();
  const { setAuthUser } = useAuth();

  return useMutation({
    mutationKey: ["VERIFY_OTP"],
    mutationFn: verifyOTP,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["ME"] });
        setAuthUser(data?.data?.accessToken);
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// Resend OTP
export const useResendOTP = () => {
  return useMutation({
    mutationKey: ["RESEND_OTP"],
    mutationFn: resendOTP,
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
