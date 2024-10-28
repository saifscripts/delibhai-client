import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Submit from "../../../components/forms/Submit";
import { useResendOTP, useVerifyOTP } from "../../../hooks/auth.hook";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import cn from "../../../lib/cn";
import { setUser } from "../../../redux/features/auth/authSlice";
import { setAuthToken } from "../../../utils/authToken";
import { SubmitModal, Timer } from "../index";

function OTPVerification() {
  const {
    mutate: verifyOTP,
    isPending: isVerifyPending,
    isSuccess: isVerifySuccess,
    data: verifyData,
  } = useVerifyOTP();
  const {
    mutate: resendOTP,
    isPending: isResendPending,
    isSuccess: isResendSuccess,
    data: resendData,
  } = useResendOTP();
  const { state } = useLocation();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);
  const [OTP, setOTP] = useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (e, index) => {
    const value = e.target.value;
    const _OTP = [...OTP];

    if (e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      _OTP[index] = "";
      setOTP(_OTP);
      inputRefs[index - 1].current.focus();
      return;
    }

    if (!isNaN(value) && value.length <= 1) {
      _OTP[index] = value;
      setOTP(_OTP);

      // Move to the next input field if there's a value
      if (value && index < OTP.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();

    resendOTP({
      _id: state._id,
    });
  };

  function preventUpDown(event) {
    // 38 is the up arrow key, 40 is the down arrow key
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    verifyOTP({
      _id: state._id,
      otp: OTP.join(""),
    });
  };

  useEffect(() => {
    if (isResendSuccess && resendData?.success) {
      setTimerRunning(true);
      setOTP(resendData?.data?.otp?.split(""));
    }
  }, [isResendSuccess, resendData]);

  useEffect(() => {
    if (isVerifySuccess && verifyData?.success) {
      dispatch(
        setUser({
          user: verifyData?.data?.user,
          token: verifyData?.data?.accessToken,
        }),
      );
      setAuthToken(verifyData?.data?.accessToken);
      setIsSubmitModalOpen(true);
    }
  }, [verifyData, dispatch, isVerifySuccess]);

  // autofill otp (for testing purpose) --- delete this later
  useEffect(() => {
    setOTP(state?.otp?.split(""));
  }, [state]);

  return (
    <>
      {state && (
        <>
          <MiniContainer>
            <Title
              title="ওটিপি ভেরিফিকেশন"
              subtitle="আমাদের পাঠানো SMS এ প্রাপ্ত কোডটি প্রদান করুন +8801823540325"
            />

            <Timer
              time={60 * 1000}
              timerRunning={timerRunning}
              setTimerRunning={setTimerRunning}
            />
            <form>
              <div className="flex justify-center gap-2">
                {OTP.map((digit, index) => (
                  <input
                    key={index}
                    type="number"
                    ref={inputRefs[index]}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={preventUpDown}
                    maxLength="1"
                    disabled={isVerifyPending || isResendPending}
                    className="aspect-square w-12 rounded-lg border border-secondary px-4 text-xl focus:border-primary focus:outline-none"
                  />
                ))}
              </div>

              <p className="mx-auto my-4 w-fit">
                আমি কোনো কোড পাই নি.{" "}
                <button
                  onClick={handleResendOTP}
                  disabled={timerRunning || isVerifyPending || isResendPending}
                  className={cn("text-secondary", {
                    "text-accent":
                      timerRunning || isVerifyPending || isResendPending,
                  })}
                >
                  পুনরায় পাঠান
                </button>
              </p>

              <Submit
                value="সাবমিট করুন"
                disabled={
                  isVerifyPending ||
                  isResendPending ||
                  OTP.some((field) => field === "")
                }
                className="rounded-lg"
                onClick={handleSubmit}
              />
            </form>
          </MiniContainer>
          <SubmitModal isOpen={isSubmitModalOpen} id={state.id} />
        </>
      )}
    </>
  );
}

export { OTPVerification };
