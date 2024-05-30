import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Submit from "../../../components/forms/Submit";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { isMobilePhone } from "../../../utils/isMobilePhone";
import { useAuth } from "../contexts/AuthContext";

const userSchema = yup.object({
  mobile: yup
    .string()
    .trim()
    .required("Mobile number is required.")
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone("bn-BD")),
  password: yup.string().required("Password is required."),
});

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const { isLoading, login } = useAuth();

  const onSubmit = async (userData) => {
    const { data, error } = await login(userData);

    if (data?.success) {
      return navigate(`/profile/${data?.data?.user?._id}`);
    }

    // Handle app level errors
    if (error?.code === "mobileNotExist") {
      setError("mobile", {
        message: error.message,
      });
    } else {
      setError("general", { message: error?.message });
    }

    // Handle AxiosError
    if (error?.name === "AxiosError") {
      setError("general", { message: error?.message });
    }
  };

  return (
    <MiniContainer>
      <Title
        title="লগিন করুন"
        subtitle="সঠিক মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে লগিন করুন"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 mt-4">
          <label className="font-bold">মোবাইল নাম্বার</label>
          <input
            {...register("mobile")}
            type="text"
            placeholder="মোবাইল নাম্বার লিখুন"
            disabled={isLoading}
            className="w-full border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.mobile?.message}</p>
        </div>

        <div className="mb-1 mt-4">
          <label className="font-bold">পাসওয়ার্ড</label>
          <input
            {...register("password")}
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            disabled={isLoading}
            className="w-full border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.password?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Submit disabled={isLoading} value="লগিন" />
      </form>
    </MiniContainer>
  );
}

export { Login };
