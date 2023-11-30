import Button from "../Button";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";

function SignupForm({ step, setStep }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let newAccount = {};
  let newDevice = {};

  function handleFormSubmit(data, e) {
    e.preventDefault();
    console.log(data);
    if (step === 1) {
      newAccount = data;
      reset();
      setStep(2);
    }
    if (step === 2) {
      newDevice = data;
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleFormSubmit)}>
      {step === 1 && (
        <>
          <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
            Sign Up
          </p>
          <FormRow type="horizontal">
            <FormRow id="firstName" label="First Name:">
              <Input id="firstName" register={register} />
            </FormRow>
            <FormRow id="lastName" label="Last Name:">
              <Input id="lastName" register={register} />
            </FormRow>
          </FormRow>
          <FormRow id="email" label="Email:">
            <Input type="email" id="email" register={register} />
          </FormRow>
          <FormRow type="horizontal">
            <FormRow label="Password:">
              <Input type="password" id="password" register={register} />
            </FormRow>
            <FormRow label="Confirm:">
              <Input type="password" />
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
      )}
      {/*  */}
      {/*  */}
      {step === 2 && (
        <>
          <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
            Device Type:
          </p>
          <FormRow type="horizontal">
            <FormRow id="recordingDevice" label="recordingDevice">
              <Input id="text" register={register} />
            </FormRow>
            <FormRow id="camera" label="Camera:">
              <Input id="text" register={register} />
            </FormRow>
          </FormRow>
          <FormRow id="dataChannel" label="Data Channel:">
            <Input type="text" id="dataChannel" register={register} />
          </FormRow>
          <FormRow id="devicesQuantity" label="Quantitiy of devices:">
            <Input type="number" id="devicesQuantity" register={register} />
          </FormRow>
        </>
      )}

      <div className="flex items-center justify-between">
        <Button
          type="signup"
          onClick={() => {
            step === 1 ? setStep(2) : setStep(1);
          }}
        >
          {step === 1 ? "Next" : "sign up"}
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
