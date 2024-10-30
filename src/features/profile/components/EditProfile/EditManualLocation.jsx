import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../../../components/ui/Button";
import { useAuth } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import Modal from "../../../../layouts/Modal";

const userSchema = yup.object({
  manualLocation: yup
    .object({
      latitude: yup.number(),
      longitude: yup.number(),
    })
    .transform((value) => {
      const [latitude, longitude] = value.split(",").map((l) => l.trim());
      return { latitude, longitude };
    }),
});

export default function EditManualLocation({ isOpen, onClose }) {
  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
  } = useUpdateRider();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      manualLocation: `${user?.manualLocation?.latitude}, ${user?.manualLocation?.longitude}`,
    },
  });

  useEffect(() => {
    // Function to get the user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setValue("manualLocation", `${latitude}, ${longitude}`);
          },
          (error) => {
            console.error("Error getting location:", error);
          },
        );
      } else {
        console.error("Geolocation is not supported  by this browser.");
      }
    };
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeBtn
      headerText="ম্যানুয়াল লোকেশন"
    >
      <form
        onSubmit={handleSubmit(updateRider)}
        className="w-[512px] max-w-full"
      >
        <div className="mb-1">
          <label className="font-bold">Geo Location</label>
          <input
            type="text"
            disabled={isSubmitting}
            placeholder="Geo Location"
            {...register("manualLocation")}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.manualLocation?.message}</p>
        </div>

        <Button disabled={isSubmitting} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
