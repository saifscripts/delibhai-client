import { useRef, useState } from "react";
import PageContainer from "../../../layouts/PageContainer"
import Title from "../../../layouts/Title"
import TopPanel from "../../../layouts/TopPanel"
import {Timer} from '../index'

function OTPVerification() {
    const [timerRunning, setTimerRunning] = useState(true);
    const [otp, setOTP] = useState(["", "", "", "", "", ""]);
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
    setOTP(["", "", "", "", "", ""])
}

  return (
    <>
      <TopPanel />
      <Title
        title='ওটিপি ভেরিফিকেশন'
        subtitle='আমাদের পাঠানো SMS এ প্রাপ্ত কোডটি প্রদান করুন +8801823540325'
      />

      <PageContainer>
      <Timer time={60 * 1000} timerRunning={timerRunning} setTimerRunning={setTimerRunning} />
        <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
                <input
                key={index}
                type="text"
                ref={inputRefs[index]}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="w-12 aspect-square text-xl px-4 border border-secondary rounded-lg focus:outline-none focus:border-primary"
                />
            ))}
        </div>

        <p className="w-fit mx-auto my-4">আমি কোনো কোড পাই নি. <button onClick={resendOTP} disabled={timerRunning} className={`text-${timerRunning ? 'accent': 'secondary'}`}>পুনরায় পাঠান</button></p>
      </PageContainer>
    </>
  )
}

export {OTPVerification}