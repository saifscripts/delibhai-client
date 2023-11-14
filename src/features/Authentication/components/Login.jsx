import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
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

  const [loading, setLoading] = useState(false);

  const onSubmit = async (userData) => {
    setLoading(true);
    const response = await fetch(
      "https://dev-delibhai.onrender.com/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await response.json();
    console.log(result);

    if (result.success) {
      const { token, user } = result.data;
      const { _id } = user;

      localStorage.setItem("authToken", token);
      return navigate(`/profile/${_id}`);
    } else if (result?.code === "mobileNotExist") {
      setError("mobile", {
        message: result.message,
      });
    } else {
      setError("general", { message: result.message });
    }

    setLoading(false);
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
              disabled={loading}
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
              disabled={loading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.password?.message}</p>
          </div>

          <p className="text-red-400">{errors.general?.message}</p>

          <Submit disabled={loading} value="লগিন" />
        </form>
      </PageContainer>
    </>
  );
}

export { Login };
