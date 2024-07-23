import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import isURL from "validator/lib/isURL";
import * as yup from "yup";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import Modal from "../../../../layouts/Modal";
import {
  getAuthUser,
  setUser,
} from "../../../../redux/features/auth/authSlice";

const userSchema = yup.object({
  videoURL: yup
    .string()
    .test("isYoutubeURL", "Please provide a valid url.", isURL),
});

export default function EditVideoURL({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const { isLoading, updateData } = useUpdateData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      videoURL: user?.videoURL,
    },
  });

  const onSubmit = async (userData) => {
    const { data, error } = await updateData(`/v1/user/${user._id}`, userData);

    if (data?.success) {
      dispatch(
        setUser({
          user: data.data,
        }),
      );
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
      headerText="ডিহিরোর অভিব্যক্তি"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[512px] max-w-full">
        <div className="mb-1 mt-4">
          <label className="font-bold">ভিডিও লিংক</label>
          <input
            {...register("videoURL")}
            type="text"
            placeholder="ইউটিউব ভিডিও লিংক লিখুন"
            disabled={isLoading}
            className="h-full w-full overflow-y-hidden border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.videoURL?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
