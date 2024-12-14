import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useResendOTP, useVerifyOTP } from "../../../hooks/auth.hook";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
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
      setIsSubmitModalOpen(true);
    }
  }, [verifyData, isVerifySuccess]);

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
              subtitle={
                <>
                  <p>আমাদের পাঠানো SMS এ প্রাপ্ত কোডটি প্রদান করুন</p>
                  <p>+88{state.mobile}</p>
                </>
              }
            />

            <Timer
              time={60 * 1000}
              timerRunning={timerRunning}
              setTimerRunning={setTimerRunning}
            />
            <form className="flex flex-col gap-4">
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
                    className="border-tone aspect-square w-12 rounded-lg border px-4 text-xl focus:border-primary focus:outline-none"
                  />
                ))}
              </div>

              <p className="mx-auto w-fit">
                আমি কোনো কোড পাই নি{" "}
                <Button
                  onClick={handleResendOTP}
                  disabled={timerRunning || isVerifyPending || isResendPending}
                  variant="link"
                  className={`cursor-pointer p-0 text-base ${timerRunning || isVerifyPending || isResendPending ? "text-muted-foreground" : ""}`}
                >
                  পুনরায় পাঠান
                </Button>
              </p>

              <Button
                className="mx-auto w-full max-w-xl"
                disabled={
                  isVerifyPending ||
                  isResendPending ||
                  OTP.some((field) => field === "")
                }
                onClick={handleSubmit}
              >
                সাবমিট করুন
              </Button>
            </form>
          </MiniContainer>
          <SubmitModal isOpen={isSubmitModalOpen} id={state.id} />
        </>
      )}
    </>
  );
}

export { OTPVerification };
