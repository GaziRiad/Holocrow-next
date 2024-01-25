import { useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";

function SignupForm({ step, setStep }) {
  const [emailErr, setEmailErr] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  let newAccount;
  let newDevice;

  async function checkEmailExist(email) {
    const res = await fetch(
      `https://api.holocrow.com/api/accounts/customer-register/check-email/?email=${email}`
    );
    if (!res.ok) throw new Error("Error with email");
    const data = await res.json();
    return data;
  }

  async function handleAccount(data, e) {
    e.preventDefault();
    newAccount = data;
    console.log(newAccount);
    // reset();
    const emailExist = await checkEmailExist(data.email);
    if (!emailExist) setEmailErr(true);
    if (emailExist) setStep(2);
  }
  function handleDevice(data, e) {
    e.preventDefault();
    newDevice = data;
    console.log(newDevice);
  }

  if (step === 1)
    return (
      <form className="flex flex-col" onSubmit={handleSubmit(handleAccount)}>
        {step === 1 && (
          <>
            <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
              Sign Up
            </p>
            {/* {emailErr && (
              <p className="text-red-400 mb-6">
                This email seems to already exist.
              </p>
            )} */}
            <FormRow type="horizontal">
              <FormRow
                id="firstName"
                label="First Name:"
                error={errors?.firstName?.message}
              >
                <Input
                  id="firstName"
                  register={register}
                  validation={{ required: "This field is required" }}
                />
              </FormRow>
              <FormRow
                id="lastName"
                label="Last Name:"
                error={errors?.lastName?.message}
              >
                <Input
                  id="lastName"
                  register={register}
                  validation={{ required: "This field is required" }}
                />
              </FormRow>
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
                      value === getValues().password ||
                      "Passwords need to match",
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
              <p className="text-black-800 text-sm font-normal">
                Show password
              </p>
            </div>{" "}
          </>
        )}

        <div className="flex items-center justify-between">
          <Button type="signup">Next</Button>
        </div>
      </form>
    );

  if (step === 2)
    return (
      <>
        <form className="flex flex-col" onSubmit={handleSubmit(handleDevice)}>
          <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
            Device Type:
          </p>
          <FormRow type="horizontal">
            <FormRow id="recordingDevice" label="Recording Device">
              <select
                {...register("recordingDevice")}
                className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
              >
                <option value="Camera">Camera</option>
                <option value="audio device">Audio device</option>
              </select>
            </FormRow>
          </FormRow>
          <FormRow
            id="dataChannel"
            label="Data Channel:"
            error={errors?.dataChannel?.message}
          >
            <Input
              type="text"
              id="dataChannel"
              register={register}
              validation={{ required: "This field is required" }}
            />
          </FormRow>
          <FormRow
            id="devicesQuantity"
            label="Quantitiy of devices:"
            error={errors?.devicesQuantity?.message}
          >
            <Input
              type="number"
              id="devicesQuantity"
              register={register}
              validation={{ required: "This field is required" }}
            />
          </FormRow>
          <div className="flex items-center justify-between">
            <Button type="signup">sign up</Button>
          </div>
        </form>
      </>
    );
}

export default SignupForm;
