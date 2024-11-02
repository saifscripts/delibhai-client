import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../../../components/ui/Button";
import { useMe } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import Modal from "../../../../layouts/Modal";

const userSchema = yup.object({
  videoURL: yup.string().url(),
});

export default function EditVideoURL({ isOpen, onClose }) {
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
      videoURL: user?.videoURL,
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
      headerText="ডিহিরোর অভিব্যক্তি"
    >
      <form
        onSubmit={handleSubmit(updateRider)}
        className="w-[512px] max-w-full"
      >
        <div className="mb-1 mt-4">
          <label className="font-bold">ভিডিও লিংক</label>
          <input
            {...register("videoURL")}
            type="text"
            placeholder="ইউটিউব ভিডিও লিংক লিখুন"
            disabled={isSubmitting}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.videoURL?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Button disabled={isSubmitting} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
