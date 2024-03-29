import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import { useForm } from "react-hook-form";

import { makeAuthenticatedRequest } from "../../../utils/funcs";
import Input from "../Input";
import { useAuth } from "@/contexts/AuthContext";

function DeviceForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { location },
  } = useAuth();
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getAllBrands(url) {
      const res = await makeAuthenticatedRequest(url, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Error fetching brands...");
      }

      const data = await res.json();

      // Update brands with new results
      setBrands((prevBrands) => {
        const uniqueResults = data.results.filter(
          (result) =>
            !prevBrands.some((prevResult) => prevResult.uuid === result.uuid)
        );
        return [...prevBrands, ...uniqueResults];
      });

      if (data.next) {
        // If there is a "next" page, recursively fetch it
        getAllBrands(data.next);
      }
    }

    getAllBrands("https://api.holocrow.com/api/devices/brands/");
  }, []);

  useEffect(() => {
    // Fetch models for the selected brand
    const fetchModels = async (url) => {
      if (selectedBrand) {
        const res = await makeAuthenticatedRequest(url, {
          method: "GET",
        });
        const data = await res.json();
        // Update models with new results
        setModels((prevBrands) => {
          const uniqueResults = data.results.filter(
            (result) =>
              !prevBrands.some((prevResult) => prevResult.uuid === result.uuid)
          );
          return [...prevBrands, ...uniqueResults];
        });
        setModels(data.results);
      }
    };

    fetchModels(
      `https://api.holocrow.com/api/devices/models/?brand=23dd5807-189e-4a93-bd10-afe093e800fd`
    );
  }, [selectedBrand]);

  // handlers
  const handleBrandChange = async (event) => {
    setModels([]);
    const newBrand = event.target.value;
    setSelectedBrand(newBrand);
  };

  async function handleDevice(data, e) {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await makeAuthenticatedRequest(
        `https://api.holocrow.com/api/devices/location-customer/`,
        {
          method: "POST",
          body: JSON.stringify({ ...location }),
        }
      );
      if (!res.ok) {
        setIsLoading(false);
        throw new Error("Error submitting Location.");
      }
      const locData = await res.json();
      const newDevice = {
        brand: data.brand,
        model: data.model,
        location: locData.uuid,
        device_type: data.deviceType,
        name: data.name,
        active_channels: data.deviceType === 2 ? 0 : data.dataChannel,
        crawler_type: 1,
        write_count: data.quantityChannels,
      };
      const resDevice = await makeAuthenticatedRequest(
        `https://api.holocrow.com/api/devices/device-customer/onboarding/`,
        {
          method: "POST",
          body: JSON.stringify({ ...newDevice }),
        }
      );
      if (!resDevice.ok) {
        setIsLoading(false);
        throw new Error("Error submitting Device.");
      }
      const dataDevice = await resDevice.json();

      // GETTING AN ONE TIME LOGIN TOKEN WITH REDIRECTING
      const resLogin = await makeAuthenticatedRequest(
        `https://api.holocrow.com/api/accounts/customer-register/login-token/`,
        {
          method: "POST",
        }
      );

      if (!res.ok) {
        setIsLoading(false);

        throw new Error("Error submitting Location.");
      }
      const LoginData = await resLogin.json();
      setIsLoading(false);
      window.location.href = `https://app.holocrow.com/token-login?token=${LoginData.code}`;
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleDevice)}>
      <>
        <p className="text-left text-primary font-semibold mb-8 ">Add Device</p>
        <FormRow id="name" label="Device Name:" error={errors?.name?.message}>
          <Input
            placeHolder="Eg: Camera 101"
            id="name"
            register={register}
            validation={{
              required: "This field is required",
            }}
          />
        </FormRow>
        <FormRow
          id="deviceType"
          label="Device Type:"
          error={errors?.deviceType?.message}
        >
          <select
            id="deviceType"
            {...register("deviceType", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
          >
            <option value="">choose a Type:</option>
            <option value="1">NVR</option>
            <option value="2">Camera</option>
          </select>
        </FormRow>
        <FormRow id="brand" label="Brand:" error={errors?.brand?.message}>
          <select
            id="brand"
            {...register("brand", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
            onChange={handleBrandChange}
          >
            <option value="">choose a brand:</option>
            {brands.map((brand) => (
              <option key={brand.uuid} value={brand.uuid}>
                {brand.name}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow id="model" label="Model:" error={errors?.model?.message}>
          <select
            disabled={!selectedBrand}
            id="model"
            {...register("model", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
          >
            <option value="">choose a model:</option>
            {models.map((model) => (
              <option key={model.uuid} value={model.uuid}>
                {model.name}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow
          id="dataChannel"
          label="Data Channel:"
          error={errors?.dataChannel?.message}
        >
          <select
            id="dataChannel"
            {...register("dataChannel", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
          >
            <option value="">choose a channel:</option>
            <option value="1">EMAIL</option>
            <option value="2">FTP</option>
          </select>
        </FormRow>
        <FormRow
          id="quantityChannels"
          label="Quantity of Channels:"
          error={errors?.quantityChannels?.message}
        >
          <Input
            id="quantityChannels"
            register={register}
            validation={{
              required: "This field is required",
            }}
          />
        </FormRow>
      </>

      <div className="flex items-center justify-between">
        <Button type="signup" disabled={isLoading}>
          Submit device
        </Button>
      </div>
    </form>
  );
}

export default DeviceForm;
