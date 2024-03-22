import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetchData, usePostData } from "../../../api/api";
import Submit from "../../../components/forms/Submit";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { SubmitModal, Timer } from "../index";

function OTPVerification() {
  const { state } = useLocation();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);
  const [OTP, setOTP] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const { isLoading, postData } = usePostData();
  const { fetchData } = useFetchData();

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

  const resendOTP = async (e) => {
    e.preventDefault();

    const { data, error } = await fetchData(`/v1/user/resend-otp/${state.id}`);

    if (data?.success) {
      setError("");
      setTimerRunning(true);
      setOTP(["", "", "", "", "", ""]);
    } else {
      setError(error?.message);
    }
  };

  function preventUpDown(event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      // 38 is the up arrow key, 40 is the down arrow key
      event.preventDefault();
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await postData("/v1/user/verify-otp", {
      id: state.id,
      otp: OTP.join(""),
    });

    if (data?.success) {
      setError("");
      setIsSubmitModalOpen(true);
    } else {
      setError(error?.message);
    }
  };

  return (
    <>
      {state && (
        <>
          <MiniContainer>
            <Title
              title="ওটিপি ভেরিফিকেশন"
              subtitle="আমাদের পাঠানো SMS এ প্রাপ্ত কোডটি প্রদান করুন +8801823540325"
            />

            <p className="mt-4 text-center text-xl text-red-400">{error}</p>
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
                    disabled={isLoading}
                    className="aspect-square w-12 rounded-lg border border-secondary px-4 text-xl focus:border-primary focus:outline-none"
                  />
                ))}
              </div>

              <p className="mx-auto my-4 w-fit">
                আমি কোনো কোড পাই নি.{" "}
                <button
                  onClick={resendOTP}
                  disabled={timerRunning}
                  className={`text-${timerRunning ? "accent" : "secondary"}`}
                >
                  পুনরায় পাঠান
                </button>
              </p>

              <Submit
                value="সাবমিট করুন"
                disabled={isLoading || OTP.some((field) => field === "")}
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
