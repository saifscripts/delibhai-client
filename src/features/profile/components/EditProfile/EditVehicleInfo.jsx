/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Button from "../../../../components/ui/Button";
import vehicles from "../../../../data/vehicles";
import Modal from "../../../../layouts/Modal";
import {
  getAuthUser,
  setUser,
} from "../../../../redux/features/auth/authSlice";
import { useUpdateRiderMutation } from "../../../../redux/features/user copy/riderApi";

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
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const [updateRider] = useUpdateRiderMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      vehicleType: user.vehicleType,
      vehicleBrand: user.vehicleBrand,
      vehicleModel: user.vehicleModel,
      vehicleNumber: user.vehicleNumber,
      vehicleName: user.vehicleName,
    },
  });

  const onSubmit = async (data) => {
    const result = await updateRider(data);

    if (result?.data?.success) {
      dispatch(
        setUser({
          user: result?.data?.data,
        }),
      );
      onClose();
    } else {
      setError("general", { message: result?.error?.data?.message });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeBtn
      headerText="গাড়ির সাধারণ তথ্য"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[512px] max-w-full">
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
          <p className="text-red-400">{errors.vehicleType?.message}</p>
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
          <p className="text-red-400">{errors.vehicleBrand?.message}</p>
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
          <p className="text-red-400">{errors.vehicleModel?.message}</p>
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
          <p className="text-red-400">{errors.vehicleNumber?.message}</p>
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
          <p className="text-red-400">{errors.vehicleName?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Button disabled={isSubmitting} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
