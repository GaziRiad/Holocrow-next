"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { formatTime, makeAuthenticatedRequest } from "../../../utils/funcs";
import { useAuth } from "@/contexts/AuthContext";

function OtpForm({ setCurrStep }) {
  const { dispatch } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [otpError, setOtpError] = useState("");

  const [otpCount, setOtpCount] = useState(0);
  const [timer, setTimer] = useState(180);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const { register, handleSubmit, reset } = useForm();

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

  //
  async function handleOtp(data, e) {
    try {
      console.log(data);
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      setIsLoading(false);
    }
  }

  async function handleResendOtp() {
    setIsLoading(true);
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

  //
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

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

  return (
    <>
      <form className="flex flex-col mb-12" onSubmit={handleSubmit(handleOtp)}>
        <>
          {otpError && <p className="text-red-400 mb-6">OTP code is wrong.</p>}
          <div class="flex space-x-2 mb-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                autoFocus={index === 0 ? true : false}
                type="text"
                maxLength="1"
                value={otpValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onPaste={handlePaste}
                className="w-12 h-12 border border-gray-600 text-4xl text-center focus:outline-none"
              />
            ))}
          </div>
        </>

        <div className="flex items-center justify-between">
          <Button type="signup" disabled={isLoading}>
            confirm
          </Button>
        </div>
      </form>

      <div className="mb-4">
        <button
          className="text-md capitalize underline text-primary hover:text-yellow-500 transition-all disabled:cursor-not-allowed disabled:opacity-75"
          onClick={handleResendOtp}
          disabled={isLoading}
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
