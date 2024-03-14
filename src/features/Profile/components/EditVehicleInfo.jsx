/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import vehicles from "../../../data/vehicles";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";

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

const EditVehicleInfo = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const { isLoading, updateData } = useUpdateData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      vehicleType: currentUser?.vehicleType,
      vehicleBrand: currentUser?.vehicleBrand,
      vehicleModel: currentUser?.vehicleModel,
      vehicleNumber: currentUser?.vehicleNumber,
      vehicleName: currentUser?.vehicleName,
    },
  });

  const onSubmit = async (userData) => {
    const { data, error } = await updateData(
      `/v1/user/${currentUser._id}`,
      userData
    );

    if (data?.success) {
      setCurrentUser(data.data);
      return navigate(-1);
    } else {
      setError("general", { message: error?.message });
    }
  };

  return (
    <>
      <Title
        title="গাড়ির সাধারণ তথ্য"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির ধরণ</label>
            <select
              {...register("vehicleType")}
              disabled={isLoading}
              className="w-full py-3 border-b border-primary bg-transparent"
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

          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির ব্র্যান্ড</label>
            <input
              {...register("vehicleBrand")}
              type="text"
              placeholder="গাড়ির ব্র্যান্ড লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.vehicleBrand?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির মডেল</label>
            <input
              {...register("vehicleModel")}
              type="text"
              placeholder="গাড়ির মডেল লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.vehicleModel?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির নম্বর</label>
            <input
              {...register("vehicleNumber")}
              type="text"
              placeholder="গাড়ির নম্বর লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.vehicleNumber?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির নাম</label>
            <input
              {...register("vehicleName")}
              type="text"
              placeholder="গাড়ির নাম লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.vehicleName?.message}</p>
          </div>

          <p className="text-red-400">{errors.general?.message}</p>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditVehicleInfo };
