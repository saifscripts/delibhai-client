import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useMe } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import Modal from "../../../../layouts/Modal";
import isMobilePhone from "../../../../utils/validators/isMobilePhone";

const userSchema = yup.object({
  contactNo1: yup
    .string()
    .trim()
    .required("Mobile number is required.")
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone),
  contactNo2: yup
    .string()
    .trim()
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone),
  email: yup.string().trim().lowercase().email(),
  facebookURL: yup.string().url(),
});

export default function EditContactInfo({ isOpen, onClose }) {
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
      contactNo1: user?.contactNo1,
      contactNo2: user?.contactNo2,
      email: user?.email,
      facebookURL: user?.facebookURL,
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
      headerText="কন্টাক্ট ইনফো"
    >
      <form
        onSubmit={handleSubmit(updateRider)}
        className="w-[512px] max-w-full"
      >
        <div className="mb-1">
          <label className="font-bold">মোবাইল নাম্বার</label>
          <input
            {...register("contactNo1")}
            type="text"
            placeholder="মোবাইল নাম্বার লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.contactNo1?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">বিকল্প মোবাইল নম্বর</label>
          <input
            {...register("contactNo2")}
            type="text"
            placeholder="বিকল্প মোবাইল নাম্বার লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.contactNo2?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">ই-মেইল</label>
          <input
            {...register("email")}
            type="text"
            placeholder="ই-মেইল লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.email?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">ফেইসবুক লিংক</label>
          <input
            {...register("facebookURL")}
            type="text"
            placeholder="ফেইসবুক লিংক লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-destructive">{errors.facebookURL?.message}</p>
        </div>

        <p className="text-destructive">{errors.general?.message}</p>

        <Button disabled={isSubmitting} type="submit" className="mt-4 w-full">
          সংরক্ষণ করুন
        </Button>
      </form>
    </Modal>
  );
}
