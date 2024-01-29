"use client";

import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { formatTime } from "../../../utils/funcs";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

function OtpForm() {
  const router = useRouter();
  const {
    dispatch,
    state: { accessToken },
  } = useAuth();

  const [otpError, setOtpError] = useState("");

  const [otpCount, setOtpCount] = useState(0);
  const [timer, setTimer] = useState(null); // 180 seconds = 3 minutes
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

  async function handleOtp(data, e) {
    e.preventDefault();
    setOtpError(false);
    const res = await fetch(
      `https://api.holocrow.com/api/accounts/customer-register/check-verify-token/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ code: data.otpCode }),
      }
    );
    setOtpCount((otpCount) => otpCount + 1);
    if (!res.ok && otpCount === 3) {
      setOtpCount(0);
      dispatch({
        type: "UNAUTH/USER",
      });
      // router.push();
      return;
    }
    if (!res.ok) return setOtpError(true);
    const otpData = await res.json();
    dispatch({
      type: "VALIDATE/USER",
      payload: {
        isVerified: otpData.is_verified,
      },
    });
    setOtpCount(0);
    router.push("/process/submitLocation");
    reset();
  }

  async function handleResendOtp() {
    const res = await fetch(
      `https://api.holocrow.com/api/accounts/customer-register/send-verify-token/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!res.ok) return console.log("Error resending OTP code.");
    setTimer(60);
    setIsTimerExpired(false);
    return res.json();
  }

  return (
    <>
      <form className="flex flex-col mb-12" onSubmit={handleSubmit(handleOtp)}>
        <>
          {otpError && <p className="text-red-400 mb-6">OTP code is wrong.</p>}
          <FormRow label="Enter the verification code sent to your email">
            <Input
              type="number"
              id="otpCode"
              register={register}
              validation={{
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Code must have 6 characters",
                },
                maxLength: {
                  value: 6,
                  message: "Code must have 6 characters",
                },
              }}
            />
          </FormRow>
        </>

        <div className="flex items-center justify-between">
          <Button type="signup">confirm</Button>
        </div>
      </form>

      <div className="mb-4">
        <button
          className="text-md capitalize underline text-primary hover:text-yellow-500 transition-all"
          onClick={handleResendOtp}
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
