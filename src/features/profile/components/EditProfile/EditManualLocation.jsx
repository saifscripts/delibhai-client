import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import Modal from "../../../../layouts/Modal";
import {
  getAuthUser,
  setUser,
} from "../../../../redux/features/auth/authSlice";

const userSchema = yup.object({
  geoLocation: yup
    .string()
    .test("isValidGeoLocation", `Invalid GeoLocation!`, (geo) => {
      const [lat, lon] = geo.split(",").map((l) => l.trim());
      return (
        isFinite(lat) &&
        Math.abs(lat) <= 90 &&
        isFinite(lon) &&
        Math.abs(lon) <= 180
      );
    }),
});

export default function EditManualLocation({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const [isLoading, setIsLoading] = useState(false);
  const { updateData } = useUpdateData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    // Function to get the user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setValue("geoLocation", `${latitude}, ${longitude}`);
          },
          (error) => {
            console.error("Error getting location:", error);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onSubmit = async ({ geoLocation }) => {
    setIsLoading(true);

    const [latitude, longitude] = geoLocation.split(",").map((l) => l.trim());

    const manualLocation = { latitude, longitude };

    // Update data
    const { data } = await updateData(`/v1/user/${user._id}`, {
      manualLocation,
    });

    if (data?.success) {
      dispatch(
        setUser({
          user: data.data,
        }),
      );
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
          <label className="font-bold">Geo Location</label>
          <input
            type="text"
            disabled={isLoading}
            placeholder="Geo Location"
            {...register("geoLocation")}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.geoLocation?.message}</p>
        </div>

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
