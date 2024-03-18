/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { isNID } from "../../../utils/isNID";
import { useAuth } from "../../Authentication/contexts/AuthContext";

const userSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters long."),
  fatherName: yup
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long."),
  gender: yup
    .string()
    .required("Gender is required.")
    .oneOf(
      ["পুরুষ", "মহিলা", "অন্যান্য"],
      "${value} is an invalid gender. Gender must be পুরুষ/মহিলা/অন্যান্য."
    ),
  bloodGroup: yup
    .string()
    .oneOf(
      ["এ+", "বি+", "এবি+", "ও+", "এ-", "বি-", "এবি-", "ও-"],
      "${value} is an invalid blood group."
    ),
  age: yup.number().integer("{value} is not an integer value."),
  nid: yup.string().test("isValidNID", "NID is not valid.", isNID),
  nidURL: yup.mixed(),
});

const EditPersonalInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: currentUser?.name,
      fatherName: currentUser?.fatherName,
      gender: currentUser?.gender,
      bloodGroup: currentUser?.bloodGroup,
      age: currentUser?.age,
      nid: currentUser?.nid,
    },
  });

  const onSubmit = async (userData) => {
    setIsLoading(true);

    // If user select nid image
    if (userData.nidURL[0]) {
      // Create formData and append the image file
      const formData = new FormData();
      formData.append("image", userData.nidURL[0]);

      // Upload the image to the imagebb
      const imgbbResult = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );

      // If image upload is not successful, setError message and return
      if (!imgbbResult?.data?.success) {
        setIsLoading(false);
        return setError("general", {
          message: imgbbResult.data.error.message || "Something went wrong",
        });
      }

      // If image upload is successful, set the url as nidURL field value
      userData.nidURL = imgbbResult.data.data.url;
    } else {
      // If user doesn't select any image to upload, set nidURL = undefined
      userData.nidURL = undefined;
    }

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
      <Title
        title="ব্যক্তিগত তথ্য"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mt-4 mb-1">
            <label className="font-bold">নিজের নাম</label>
            <input
              {...register("name")}
              type="text"
              placeholder="নিজের নাম লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.name?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">পিতার নাম</label>
            <input
              {...register("fatherName")}
              type="text"
              placeholder="পিতার নাম লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.fatherName?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">লিঙ্গ</label>
            <select
              {...register("gender")}
              disabled={isLoading}
              className="w-full py-3 border-b border-primary bg-transparent"
            >
              <option value="পুরুষ">পুরুষ</option>
              <option value="মহিলা">মহিলা</option>
              <option value="অন্যান্য">অন্যান্য</option>
            </select>
            <p className="text-red-400">{errors.gender?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">রক্তের গ্রুপ</label>
            <select
              {...register("bloodGroup")}
              disabled={isLoading}
              className="w-full py-3 border-b border-primary bg-transparent"
            >
              <option value="এ+">এ+</option>
              <option value="বি+">বি+</option>
              <option value="এবি+">এবি+</option>
              <option value="ও+">ও+</option>
              <option value="এ-">এ-</option>
              <option value="বি-">বি-</option>
              <option value="এবি-">এবি-</option>
              <option value="ও-">ও-</option>
            </select>
            <p className="text-red-400">{errors.bloodGroup?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">বয়স</label>
            <input
              {...register("age")}
              type="number"
              placeholder="বয়স লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.age?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">জন্মনিবন্ধন/NID নম্বর</label>
            <input
              {...register("nid")}
              type="number"
              placeholder="জন্মনিবন্ধন/NID নম্বর লিখুন"
              disabled={isLoading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.nid?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">জন্মনিবন্ধন/NID এর ছবি</label>
            <input
              {...register("nidURL")}
              type="file"
              disabled={isLoading}
              accept="image/*"
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.nidURL?.message}</p>
          </div>

          <p className="text-red-400">{errors.general?.message}</p>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditPersonalInfo };
