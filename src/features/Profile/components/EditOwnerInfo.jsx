/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { isMobilePhone } from "../../../utils/isMobilePhone";
import getSelectedAddress from "../utils/getSelectedAdress";
import restoreAddressState from "../utils/restoreAddressState";
import { Address } from "./Address";

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

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

const EditOwnerInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ownerAddress, setOwnerAddress] = useState(defaultAddressValue);
  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  useEffect(() => {
    const ownerAddress = currentUser?.ownerAddress;
    ownerAddress && setOwnerAddress(restoreAddressState(ownerAddress));
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
    userData.ownerAddress = getSelectedAddress(ownerAddress);

    // Update data
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

    setIsLoading(false);
  };

  return (
    <>
      <TopPanel />
      <Title
        title="গাড়ির মালিকানার তথ্য"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <PageContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mt-4 mb-1">
            <label className="font-bold">কোম্পানি/মালিকের নাম</label>
            <input
              {...register("ownerName")}
              type="text"
              placeholder="কোম্পানি/মালিকের নাম লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.ownerName?.message}</p>
          </div>

          <p className="font-bold mt-4 mb-3 py-3 border-b border-light">
            ঠিকানা
          </p>

          <Address address={ownerAddress} setAddress={setOwnerAddress} />

          <div className="mt-4 mb-1">
            <label className="font-bold">মোবাইল</label>
            <input
              {...register("ownerMobile")}
              type="text"
              placeholder="মোবাইল নাম্বার লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.ownerMobile?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">ই-মেইল</label>
            <input
              {...register("ownerEmail")}
              type="text"
              placeholder="ই-মেইল লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.ownerEmail?.message}</p>
          </div>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </PageContainer>
    </>
  );
};

export { EditOwnerInfo };
