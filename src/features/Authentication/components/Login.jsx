import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Submit from "../../../components/forms/Submit";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { setUser } from "../../../redux/features/auth/authSlice";
import { isMobilePhone } from "../../../utils/isMobilePhone";

const credentialSchema = yup.object({
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
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(credentialSchema),
  });

  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (credentials) => {
    const result = await login(credentials);

    if (result?.data?.success) {
      dispatch(
        setUser({
          user: result?.data?.data?.user,
          token: result?.data?.data?.accessToken,
        }),
      );
      return navigate(`/profile/${result?.data?.data?.user?._id}`);
    }

    // Handle app level errors
    if (result?.error?.status === 404) {
      setError("mobile", {
        message: result?.error?.data?.message,
      });
    } else if (result?.error) {
      setError("general", { message: result?.error?.data?.message });
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

        <Submit disabled={isSubmitting} value="লগিন" />
      </form>
    </MiniContainer>
  );
}

export { Login };
