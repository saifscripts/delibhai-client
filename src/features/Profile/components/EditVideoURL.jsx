/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import isURL from "validator/lib/isURL";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { useAuth } from "../../Authentication/contexts/AuthContext";

const userSchema = yup.object({
  videoURL: yup
    .string()
    .test("isYoutubeURL", "Please provide a valid url.", isURL),
});

const EditVideoURL = () => {
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
      videoURL: currentUser?.videoURL,
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
        title="ডিহিরোর অভিব্যক্তি"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mt-4 mb-1">
            <label className="font-bold">ভিডিও লিংক</label>
            <input
              {...register("videoURL")}
              type="text"
              placeholder="ইউটিউব ভিডিও লিংক লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.videoURL?.message}</p>
          </div>

          <p className="text-red-400">{errors.general?.message}</p>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditVideoURL };
