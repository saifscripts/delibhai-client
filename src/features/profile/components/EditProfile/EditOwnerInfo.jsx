/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import { AddressFields } from "../../../../features/AddressFields";
import { useAuth } from "../../../../features/Authentication/contexts/AuthContext";
import Modal from "../../../../layouts/Modal";
import { isMobilePhone } from "../../../../utils/isMobilePhone";
import getAddressId from "../../utils/getAddressId";

const userSchema = yup.object({
  ownerName: yup
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long."),
  ownerMobile: yup
    .string()
    .trim()
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone("bn-BD")),
  ownerEmail: yup
    .string()
    .trim()
    .lowercase()
    .test("isValidEmail", `Email is not valid.`, isEmail),
});

export default function EditOwnerInfo({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [ownerAddress, setOwnerAddress] = useState(null);
  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();

  useEffect(() => {
    const ownerAddress = currentUser?.ownerAddress;
    ownerAddress && setOwnerAddress(ownerAddress);
  }, [currentUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      ownerName: currentUser?.ownerName,
      ownerMobile: currentUser?.ownerMobile,
      ownerEmail: currentUser?.ownerEmail,
    },
  });

  const onSubmit = async (userData) => {
    setIsLoading(true);
    userData.ownerAddress = getAddressId(ownerAddress);

    // Update data
    const { data, error } = await updateData(
      `/v1/user/${currentUser._id}`,
      userData,
    );

    if (data?.success) {
      setCurrentUser(data.data);
      onClose();
    } else {
      setError("general", { message: error?.message });
    }

    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeBtn
      headerText="গাড়ির মালিকানার তথ্য"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[512px] max-w-full">
        <div className="mb-1 mt-4">
          <label className="font-bold">কোম্পানি/মালিকের নাম</label>
          <input
            {...register("ownerName")}
            type="text"
            placeholder="কোম্পানি/মালিকের নাম লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.ownerName?.message}</p>
        </div>

        <p className="border-light mb-3 mt-4 border-b py-3 font-bold">ঠিকানা</p>

        <AddressFields
          villageType="select"
          address={ownerAddress}
          setAddress={setOwnerAddress}
        />

        <div className="mb-1 mt-4">
          <label className="font-bold">মোবাইল</label>
          <input
            {...register("ownerMobile")}
            type="text"
            placeholder="মোবাইল নাম্বার লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.ownerMobile?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">ই-মেইল</label>
          <input
            {...register("ownerEmail")}
            type="text"
            placeholder="ই-মেইল লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.ownerEmail?.message}</p>
        </div>

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
