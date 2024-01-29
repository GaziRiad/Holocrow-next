import { useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

function SignupForm() {
  const router = useRouter();
  const { dispatch } = useAuth();
  const [emailErr, setEmailErr] = useState("");

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
    if (!res.ok) return setEmailErr(true);
    const data = await res.json();
    return data;
  }

  async function handleRegister(data, e) {
    e.preventDefault();
    reset();
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

    dispatch({
      type: "AUTHENTICATE/USER",
      payload: {
        isAuthenticated: true,
      },
    });
    localStorage.setItem("accessToken", registerData.access);
    localStorage.setItem("refreshToken", registerData.refresh);

    console.log(registerData);
    router.push("/process/otpValidation");
    reset();
  }

  // SIGNUP only sotres access and refresh tokens on LOCALSTORAGE & set isAuthenticated GLOBAL state to TRUE.
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
}

export default SignupForm;
