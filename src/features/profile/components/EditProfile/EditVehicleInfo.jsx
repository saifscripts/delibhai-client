/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import vehicles from "../../../../data/vehicles";
import { useMe } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import Modal from "../../../../layouts/Modal";

const vehicleTitles = vehicles.map(({ title }) => title);

const userSchema = yup.object({
  vehicleType: yup
    .string()
    .required("Vehicle type is required.")
    .oneOf(vehicleTitles, "${value} is an invalid vehicle type."),
  vehicleBrand: yup.string().trim(),
  vehicleModel: yup.string().trim(),
  vehicleNumber: yup.string().trim(),
  vehicleName: yup.string().trim(),
});

export default function EditVehicleInfo({ isOpen, onClose }) {
  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
  } = useUpdateRider();
  const { user } = useMe();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      vehicleType: user?.vehicleType,
      vehicleBrand: user?.vehicleBrand,
      vehicleModel: user?.vehicleModel,
      vehicleNumber: user?.vehicleNumber,
      vehicleName: user?.vehicleName,
    },
  });

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
      headerText="গাড়ির সাধারণ তথ্য"
    >
      <form
        onSubmit={handleSubmit(updateRider)}
        className="w-[512px] max-w-full"
      >
        <div className="mb-1">
          <label className="font-bold">গাড়ির ধরণ</label>
          <select
            {...register("vehicleType")}
            disabled={isSubmitting}
            className="w-full border-b border-primary bg-transparent py-3"
          >
            <option>গাড়ির ধরণ নির্বাচন করুন</option>

            {vehicleTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
          <p className="text-destructive">{errors.vehicleType?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">গাড়ির ব্র্যান্ড</label>
          <input
            {...register("vehicleBrand")}
            type="text"
            placeholder="গাড়ির ব্র্যান্ড লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.vehicleBrand?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">গাড়ির মডেল</label>
          <input
            {...register("vehicleModel")}
            type="text"
            placeholder="গাড়ির মডেল লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.vehicleModel?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">গাড়ির নম্বর</label>
          <input
            {...register("vehicleNumber")}
            type="text"
            placeholder="গাড়ির নম্বর লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.vehicleNumber?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">গাড়ির নাম</label>
          <input
            {...register("vehicleName")}
            type="text"
            placeholder="গাড়ির নাম লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.vehicleName?.message}</p>
        </div>

        <p className="text-destructive">{errors.general?.message}</p>

        <Button disabled={isSubmitting} type="submit" className="mt-4 w-full">
          সংরক্ষণ করুন
        </Button>
      </form>
    </Modal>
  );
}
