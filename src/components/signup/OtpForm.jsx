import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { formatTime } from "../../../utils/funcs";

function OtpForm() {
  const [otpError, setOtpError] = useState("");

  const [otpCount, setOtpCount] = useState(0);
  const [timer, setTimer] = useState(null); // 180 seconds = 3 minutes
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const [accessToken, setAccessToken] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

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
      setOtpStep(false);
      setOtpCount(0);
      setAccessToken(null);
      return;
    }
    if (!res.ok) return setOtpError(true);
    const otpData = await res.json();
    console.log(otpData);
    setOtpCount(0);
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

        {/* Your OTP form here */}
      </div>
    </>
  );
}

export default OtpForm;
