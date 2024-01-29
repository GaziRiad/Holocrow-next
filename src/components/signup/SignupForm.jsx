import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { formatTime } from "../../../utils/funcs";

function SignupForm() {
  const [emailErr, setEmailErr] = useState("");
  const [otpError, setOtpError] = useState("");

  const [otpStep, setOtpStep] = useState(false);
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

  async function checkEmailExist(email) {
    const res = await fetch(
      `https://api.holocrow.com/api/accounts/customer-register/check-email/?email=${email}`
    );
    if (!res.ok) return setEmailErr(true);
    const data = await res.json();
    return data;
  }

  async function handleRegister(data, e) {
    e.preventDefault();
    reset();
    setOtpStep(false);
    setEmailErr(false);
    const newAccount = {
      ...data,
      try_count: 0,
      country: 6,
      city: 2,
      district: 2,
    };
    await checkEmailExist(data.email);
    if (emailErr) return;
    const res = await fetch(
      `https://api.holocrow.com/api/accounts/customer-register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount),
      }
    );
    if (!res.ok) return console.log("Error trying to register");
    const registerData = await res.json();
    console.log(registerData);
    setAccessToken(registerData.access);
    reset();
    setTimer(60);
    setIsTimerExpired(false);
    setOtpStep(true);
  }

  //

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

  if (!otpStep)
    return (
      <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
        <>
          <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
            Sign Up
          </p>
          {emailErr && (
            <p className="text-red-400 mb-6">
              This email seems to already exist.
            </p>
          )}
          <FormRow type="horizontal">
            <FormRow
              id="first_name"
              label="First Name:"
              error={errors?.first_name?.message}
            >
              <Input
                id="first_name"
                register={register}
                validation={{
                  required: "This field is required",
                  minLength: {
                    value: 2,
                  },
                }}
              />
            </FormRow>
            <FormRow
              id="last_name"
              label="Last Name:"
              error={errors?.last_name?.message}
            >
              <Input
                id="last_name"
                register={register}
                validation={{
                  required: "This field is required",
                  minLength: {
                    value: 2,
                  },
                }}
              />
            </FormRow>
          </FormRow>
          <FormRow
            id="username"
            label="Username:"
            error={errors?.username?.message}
          >
            <Input
              id="username"
              register={register}
              validation={{
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Username needs a minimum of 8 characters",
                },
              }}
            />
          </FormRow>
          <FormRow id="email" label="Email:" error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              register={register}
              validation={{ required: "This field is required" }}
            />
          </FormRow>
          <FormRow type="horizontal">
            <FormRow label="Password:" error={errors?.password?.message}>
              <Input
                type="password"
                id="password"
                register={register}
                validation={{
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                }}
              />
            </FormRow>
            <FormRow
              label="Confirm:"
              error={errors?.passwordConfirmation?.message}
            >
              <Input
                type="password"
                id="passwordConfirmation"
                validation={{
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                }}
                register={register}
              />
            </FormRow>
          </FormRow>
          <span className=" text-xs max-w-xs text-slate-400 -mt-5 mb-4">
            Use 8 or more characters with a mix letters, numbers & symbols
          </span>
          <div className="flex items-center gap-2 mb-12">
            <input
              className=" bg-stone-100 h-4 w-4 accent-primary"
              type="checkbox"
            />
            <p className="text-black-800 text-sm font-normal">Show password</p>
          </div>{" "}
        </>

        <div className="flex items-center justify-between">
          <Button type="signup">sign up</Button>
        </div>
      </form>
    );
  if (optStep)
    return (
      <>
        <form
          className="flex flex-col mb-12"
          onSubmit={handleSubmit(handleOtp)}
        >
          <>
            {otpError && (
              <p className="text-red-400 mb-6">OTP code is wrong.</p>
            )}
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

export default SignupForm;
