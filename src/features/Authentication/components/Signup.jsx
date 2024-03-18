import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import * as yup from "yup";
import Submit from "../../../components/forms/Submit";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { isMobilePhone } from "../../../utils/isMobilePhone";
import { useAuth } from "../contexts/AuthContext";

const userSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters long."),
  gender: yup
    .string()
    .trim()
    .required("Gender is required.")
    .oneOf(
      ["পুরুষ", "মহিলা", "অন্যান্য"],
      "${value} is an invalid gender. Gender must be পুরুষ/মহিলা/অন্যান্য."
    ),
  email: yup
    .string()
    .trim()
    .lowercase()
    .test("isValidEmail", `Email is not valid.`, isEmail),
  mobile: yup
    .string()
    .trim()
    .required("Mobile number is required.")
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone("bn-BD")),
  password: yup
    .string()
    .required("Password is required.")
    .test(
      "isStrongPassword",
      "Password must be at least 4 characters long.",
      (value) =>
        isStrongPassword(value, {
          minLength: 4,
          minLowercase: 0,
          minNumbers: 0,
          minUppercase: 0,
          minSymbols: 0,
        })
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .test("isMatchedPassword", "Passwords don't match.", function (value) {
      return value === this.parent.password;
    }),
});

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const { signup, isLoading } = useAuth();

  const onSubmit = async (userData) => {
    const { data, error } = await signup(userData);

    if (data?.success) {
      return navigate("/otp-verification", {
        state: { id: data.data.user._id },
      });
    }

    if (error?.error?.keyPattern?.mobile) {
      setError("mobile", {
        message: "A user already exist with this mobile number.",
      });
    }

    if (error?.code === "duplicateEmail") {
      setError("email", {
        message: error.message,
      });
    }

    if (error?.name === "AxiosError") {
      setError("general", { message: error?.message });
    }
  };

  return (
    <MiniContainer>
      <Title
        title="একটি একাউন্ট তৈরী করুন"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 mb-1">
          <label className="font-bold">পুরো নাম</label>
          <input
            {...register("name")}
            type="text"
            placeholder="পুরো নাম লিখুন"
            disabled={isLoading}
            className="w-full py-3 border-b border-primary"
          />
          <p className="text-red-400">{errors.name?.message}</p>
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
          <label className="font-bold">পাসওয়ার্ড</label>
          <input
            {...register("password")}
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            disabled={isLoading}
            className="w-full py-3 border-b border-primary"
          />
          <p className="text-red-400">{errors.password?.message}</p>
        </div>

        <div className="mt-4 mb-1">
          <label className="font-bold">কনফার্ম পাসওয়ার্ড</label>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            disabled={isLoading}
            className="w-full py-3 border-b border-primary"
          />
          <p className="text-red-400">{errors.confirmPassword?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Submit disabled={isLoading} value="ওটিপি কোড পাঠান" />
      </form>
    </MiniContainer>
  );
}

export { Signup };
