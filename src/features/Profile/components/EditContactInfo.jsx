/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { isMobilePhone } from "../../../utils/isMobilePhone";

const userSchema = yup.object({
  mobile: yup
    .string()
    .trim()
    .required("Mobile number is required.")
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone("bn-BD")),
  altMobile: yup
    .string()
    .trim()
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone("bn-BD")),
  email: yup
    .string()
    .trim()
    .lowercase()
    .test("isValidEmail", `Email is not valid.`, isEmail),
  facebookURL: yup
    .string()
    .test("isFacebookURL", "Please provide a valid url.", isURL),
});

const EditContactInfo = () => {
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
      mobile: currentUser?.mobile,
      altMobile: currentUser?.altMobile,
      email: currentUser?.email,
      facebookURL: currentUser?.facebookURL,
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
      <TopPanel />
      <Title
        title="ব্যক্তিগত তথ্য"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mt-4 mb-1">
            <label className="font-bold">মোবাইল নাম্বার</label>
            <input
              {...register("mobile")}
              type="text"
              placeholder="মোবাইল নাম্বার লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.mobile?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">বিকল্প মোবাইল নম্বর</label>
            <input
              {...register("altMobile")}
              type="text"
              placeholder="বিকল্প মোবাইল নাম্বার লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.altMobile?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">ই-মেইল</label>
            <input
              {...register("email")}
              type="text"
              placeholder="ই-মেইল লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.email?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">ফেইসবুক লিংক</label>
            <input
              {...register("facebookURL")}
              type="text"
              placeholder="ফেইসবুক লিংক লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.facebookURL?.message}</p>
          </div>

          <p className="text-red-400">{errors.general?.message}</p>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditContactInfo };
