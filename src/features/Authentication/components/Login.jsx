import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { usePostData } from "../../../api/api";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { isMobilePhone } from "../../../utils/isMobilePhone";

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

  const { postData, isLoading } = usePostData();

  const onSubmit = async (userData) => {
    const { data, error } = await postData("/v1/user/login", userData);

    if (data?.success) {
      const { token, user } = data.data;
      const { _id } = user;

      localStorage.setItem("authToken", token);
      return navigate(`/profile/${_id}`);
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
    <>
      <TopPanel />
      <Title
        title="লগিন করুন"
        subtitle="সঠিক মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে লগিন করুন"
      />

      <PageContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <p className="text-red-400">{errors.general?.message}</p>

          <Submit disabled={isLoading} value="লগিন" />
        </form>
      </PageContainer>
    </>
  );
}

export { Login };
