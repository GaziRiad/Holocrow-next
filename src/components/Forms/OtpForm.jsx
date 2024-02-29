"use client";

import { useEffect, useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { formatTime, makeAuthenticatedRequest } from "../../../utils/funcs";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

function OtpForm({ setCurrStep }) {
  const { dispatch } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [otpError, setOtpError] = useState("");

  const [otpCount, setOtpCount] = useState(0);
  const [timer, setTimer] = useState(180);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [recaptchaIsVerified, setRecaptchaIsVerified] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsTimerExpired(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handlePaste = (event) => {
    const pastedData = event.clipboardData.getData("Text");
    const pastedDigits = pastedData.match(/\d/g);

    if (pastedDigits && pastedDigits.length === 6) {
      const newOtpValues = pastedDigits.slice(0, 6);
      setOtpValues(newOtpValues);
    }

    event.preventDefault();
  };

  async function handleOtp(data, e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      setOtpError(false);

      const otpCode = otpValues.join("");
      console.log(otpCode);

      const res = await makeAuthenticatedRequest(
        "https://api.holocrow.com/api/accounts/customer-register/check-verify-token/",
        {
          method: "PATCH",
          body: JSON.stringify({ code: otpCode }),
        }
      );

      setOtpCount((otpCount) => otpCount + 1);
      if (!res.ok && otpCount === 3) {
        setOtpCount(0);
        dispatch({
          type: "UNAUTH/USER",
        });
        setIsLoading(false);
        router.push("/");
        return;
      }
      if (!res.ok) {
        setOtpError(true);
        setIsLoading(false);
        return;
      }
      await res.json();
      dispatch({
        type: "VALIDATE/USER",
        payload: {
          isVerified: true,
        },
      });
      setOtpCount(0);
      setCurrStep(3);
      setIsLoading(false);
      reset();
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      setIsLoading(false);
    }
  }

  async function handleResendOtp() {
    setIsLoading(true);
    setOtpValues(["", "", "", "", "", ""]);
    const res = await makeAuthenticatedRequest(
      "https://api.holocrow.com/api/accounts/customer-register/send-verify-token/",
      {
        method: "POST",
      }
    );
    if (!res.ok)
      console.error("Failed to verify OTP:", res.status, res.statusText);

    setTimer(180);
    setIsLoading(false);
    setIsTimerExpired(false);
    return res.json();
  }

  return (
    <>
      <form className="flex flex-col mb-12" onSubmit={handleSubmit(handleOtp)}>
        <>
          {otpError && <p className="text-red-400 mb-6">OTP code is wrong.</p>}
          <div className="flex space-x-2 mb-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                autoFocus={index === 0 ? true : false}
                type="text"
                maxLength="1"
                value={otpValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onPaste={handlePaste}
                className="w-12 h-12 border border-gray-400 text-2xl text-center font-main text-black-800 focus:outline-none"
              />
            ))}
          </div>
          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6Le3e4QpAAAAAI58DHA-ObHW-niEUCbcWiGtquSa"
              size="normal"
              onChange={(value) => setRecaptchaIsVerified(!!value)}
            />
          </div>
        </>

        <div className="flex items-center justify-between">
          <Button type="signup" disabled={isLoading || !recaptchaIsVerified}>
            confirm
          </Button>
        </div>
      </form>

      <div className="mb-4">
        <button
          className="text-md capitalize underline text-primary hover:text-yellow-500 transition-all disabled:cursor-not-allowed disabled:opacity-75"
          onClick={handleResendOtp}
          disabled={isLoading || !isTimerExpired}
        >
          Resend
        </button>
      </div>

      <div>
        {isTimerExpired ? (
          <p className=" text-red-500">OTP Expired</p>
        ) : (
          <p className=" text-black-700">
            Time Remaining:{" "}
            <span className="font-semibold">{formatTime(timer)}</span>
          </p>
        )}
      </div>
    </>
  );
}

export default OtpForm;
