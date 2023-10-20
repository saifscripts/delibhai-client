import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { SubmitModal, Timer } from "../index";

function OTPVerification() {
  const { state } = useLocation();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    const updatedOTP = [...otp];

    if (e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      updatedOTP[index] = "";
      setOTP(updatedOTP);
      inputRefs[index - 1].current.focus();
      return;
    }

    if (!isNaN(value) && value.length <= 1) {
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      // Move to the next input field if there's a value
      if (value && index < otp.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const resendOTP = () => {
    setTimerRunning(true);
    setOTP(["", "", "", "", "", ""]);
  };

  function preventUpDown(event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      // 38 is the up arrow key, 40 is the down arrow key
      event.preventDefault();
      return false;
    }
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/user/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: state.id,
            otp: otp.join(""),
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setError("");
        setIsSubmitModalOpen(true);
      } else {
        setError(result.error);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {state && (
        <div>
          <TopPanel />
          <Title
            title="ওটিপি ভেরিফিকেশন"
            subtitle="আমাদের পাঠানো SMS এ প্রাপ্ত কোডটি প্রদান করুন +8801823540325"
          />

          <PageContainer>
            <p className="text-red-400 text-center text-xl mt-4">{error}</p>
            <Timer
              time={60 * 1000}
              timerRunning={timerRunning}
              setTimerRunning={setTimerRunning}
            />
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="number"
                    ref={inputRefs[index]}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={preventUpDown}
                    maxLength="1"
                    disabled={loading}
                    className="w-12 aspect-square text-xl px-4 border border-secondary rounded-lg focus:outline-none focus:border-primary"
                  />
                ))}
              </div>

              <p className="w-fit mx-auto my-4">
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
                disabled={loading}
                className="rounded-lg"
              />
            </form>
          </PageContainer>
          <SubmitModal isOpen={isSubmitModalOpen} id={state.id} />
        </div>
      )}
    </>
  );
}

export { OTPVerification };
