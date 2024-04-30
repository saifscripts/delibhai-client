/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";
import * as yup from "yup";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import { useAuth } from "../../../../features/Authentication/contexts/AuthContext";
import Modal from "../../../../layouts/Modal";
import { isMobilePhone } from "../../../../utils/isMobilePhone";

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

export default function EditContactInfo({ isOpen, onClose }) {
  const { currentUser, setCurrentUser } = useAuth();
  const { isLoading, updateData } = useUpdateData();

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
      userData,
    );

    if (data?.success) {
      setCurrentUser(data.data);
      onClose();
    } else {
      setError("general", { message: error?.message });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeBtn
      headerText="কন্টাক্ট ইনফো"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[512px] max-w-full">
        <div className="mb-1">
          <label className="font-bold">মোবাইল নাম্বার</label>
          <input
            {...register("mobile")}
            type="text"
            placeholder="মোবাইল নাম্বার লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.mobile?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">বিকল্প মোবাইল নম্বর</label>
          <input
            {...register("altMobile")}
            type="text"
            placeholder="বিকল্প মোবাইল নাম্বার লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.altMobile?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">ই-মেইল</label>
          <input
            {...register("email")}
            type="text"
            placeholder="ই-মেইল লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.email?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">ফেইসবুক লিংক</label>
          <input
            {...register("facebookURL")}
            type="text"
            placeholder="ফেইসবুক লিংক লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.facebookURL?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
