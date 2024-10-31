/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../../../components/ui/Button";
import { AddressFields } from "../../../../features/AddressFields";
import { useAuth } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import Modal from "../../../../layouts/Modal";
import isMobilePhone from "../../../../utils/validators/isMobilePhone";

const userSchema = yup.object({
  ownerName: yup
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long."),
  ownerContactNo: yup
    .string()
    .trim()
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone),
  ownerEmail: yup.string().trim().lowercase().email(),
});

export default function EditOwnerInfo({ isOpen, onClose }) {
  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
  } = useUpdateRider();
  const { user } = useAuth();
  const [ownerAddress, setOwnerAddress] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      ownerName: user?.ownerName,
      ownerContactNo: user?.ownerContactNo,
      ownerEmail: user?.ownerEmail,
    },
  });

  const onSubmit = async (data) => {
    data.ownerAddress = isEmpty(ownerAddress) ? {} : ownerAddress;
    updateRider(data);
  };

  useEffect(() => {
    const ownerAddress = user?.ownerAddress;
    ownerAddress && setOwnerAddress(ownerAddress);
  }, [user]);

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
      headerText="গাড়ির মালিকানার তথ্য"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[512px] max-w-full">
        <div className="mb-1 mt-4">
          <label className="font-bold">কোম্পানি/মালিকের নাম</label>
          <input
            {...register("ownerName")}
            type="text"
            placeholder="কোম্পানি/মালিকের নাম লিখুন"
            disabled={isSubmitting}
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
            {...register("ownerContactNo")}
            type="text"
            placeholder="মোবাইল নাম্বার লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.ownerContactNo?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">ই-মেইল</label>
          <input
            {...register("ownerEmail")}
            type="text"
            placeholder="ই-মেইল লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.ownerEmail?.message}</p>
        </div>

        <Button disabled={isSubmitting} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
