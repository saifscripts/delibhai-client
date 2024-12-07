import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Submit from "../../../components/forms/Submit";
import { useLogin } from "../../../hooks/auth.hook";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import isMobilePhone from "../../../utils/validators/isMobilePhone";

const credentialSchema = yup.object({
  mobile: yup
    .string()
    .trim()
    .required("Mobile number is required.")
    .test("isMobilePhone", `Mobile number is invalid.`, isMobilePhone),
  password: yup.string().required("Password is required."),
});

function Login() {
  const { mutate: login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(credentialSchema),
  });

  return (
    <MiniContainer>
      <Title
        title="লগইন করুন"
        subtitle="সঠিক মোবাইল নাম্বার এবং পাসওয়ার্ড দিয়ে লগইন করুন"
      />
      <form onSubmit={handleSubmit(login)}>
        <div className="mb-1 mt-4">
          <label className="font-bold">মোবাইল নাম্বার</label>
          <input
            {...register("mobile")}
            type="text"
            placeholder="মোবাইল নাম্বার লিখুন"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            className="w-full border-b border-primary py-3"
          />
          <p className="text-red-400">{errors.password?.message}</p>
        </div>

        <p className="text-red-400">{errors.general?.message}</p>

        <Submit disabled={isSubmitting} value="লগইন" />
      </form>
      <p className="text-center text-accent">
        যদি আপনার একাউন্ট না থাকে তাহলে{" "}
        <Link to="/signup" className="text-primary">
          একাউন্ট তৈরী করুন
        </Link>
      </p>
    </MiniContainer>
  );
}

export { Login };
