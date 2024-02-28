import { useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";

function SignupForm({ setCurrStep }) {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  async function checkEmailExist(email) {
    const res = await fetch(
      `https://api.holocrow.com/api/accounts/customer-register/check-email/?email=${email}`
    );
    if (!res.ok) {
      setErr("This email seems to already exist.");
      setIsLoading(false);
      return false;
    }
    const data = await res.json();
    return data;
  }

  async function handleRegister(data, e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      setErr("");
      const newAccount = {
        ...data,
        try_count: 0,
        country: 6,
        city: 2,
        district: 2,
      };
      const emailExist = await checkEmailExist(data.email);

      if (!emailExist) return setIsLoading(false);

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
      if (!res.ok && res.status !== 400) {
        setErr(
          "Error trying to register, please check your internet connexion."
        );
        setIsLoading(false);
        return;
      }
      if (!res.ok && res.status === 400) {
        setErr("Error trying to register, please try another username.");
        setIsLoading(false);
        return;
      }
      const registerData = await res.json();

      localStorage.setItem("accessToken", registerData.access);
      localStorage.setItem("refreshToken", registerData.refresh);

      setCurrStep(2);
      setIsLoading(false);
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      setIsLoading(false);
    }
  }

  // SIGNUP only sotres access and refresh tokens on LOCALSTORAGE & set isAuthenticated GLOBAL state to TRUE.
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleRegister)}>
      <>
        {err && <p className="text-red-400 mb-6">{err}</p>}
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
                message: "Username needs a minimum of 4 characters",
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
              type={`${showPassword ? "text" : "password"}`}
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
              type={`${showPassword ? "text" : "password"}`}
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
            onChange={() => setShowPassword((state) => !state)}
          />
          <p className="text-black-800 text-sm font-normal">Show password</p>
        </div>{" "}
      </>

      <div className="flex items-center justify-between">
        <Button type="signup" disabled={isLoading}>
          sign up
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
