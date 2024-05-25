import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import { useAuth } from "../../../../features/Authentication/contexts/AuthContext";
import Modal from "../../../../layouts/Modal";

const userSchema = yup.object({
  latitude: yup
    .number()
    .typeError("Latitude must be a number")
    .test(
      "isValidLatitude",
      `Invalid latitude!`,
      (num) => isFinite(num) && Math.abs(num) <= 90,
    ),
  longitude: yup
    .number()
    .typeError("Longitude must be a number")
    .test(
      "isValidLongitude",
      `Invalid longitude!`,
      (num) => isFinite(num) && Math.abs(num) <= 180,
    ),
});

export default function EditManualLocation({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  // Function to get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setValue("latitude", latitude);
          setValue("longitude", longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, [isOpen]);

  const onSubmit = async (manualLocation) => {
    setIsLoading(true);

    // Update data
    const { data } = await updateData(`/v1/user/${currentUser._id}`, {
      manualLocation,
    });

    if (data?.success) {
      setCurrentUser(data.data);
      onClose();
    }

    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeBtn
      headerText="ম্যানুয়াল লোকেশন"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[512px] max-w-full">
        <div className="mb-1">
          <label className="font-bold">Latitude</label>
          <input
            type="text"
            disabled={isLoading}
            placeholder="Latitude"
            {...register("latitude")}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.latitude?.message}</p>
        </div>

        <div className="mb-1">
          <label className="font-bold">Longitude</label>
          <input
            type="text"
            placeholder="Longitude"
            disabled={isLoading}
            {...register("longitude")}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.longitude?.message}</p>
        </div>

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
