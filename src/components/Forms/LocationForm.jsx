import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { makeAuthenticatedRequest } from "../../../utils/funcs";
import Input from "../Input";

function LocationForm({ setCurrStep }) {
  const { activeLanguage } = useLanguage();
  const { dispatch } = useAuth();

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getCountries() {
      const res = await makeAuthenticatedRequest(
        "https://api.holocrow.com/api/regions/countries-authenticated/",
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error("Error fetching countries...");
      const data = await res.json();
      setCountries(data.results);
    }
    getCountries();
  }, []);

  useEffect(() => {
    // Fetch cities for the selected country
    const fetchCities = async () => {
      if (selectedCountry) {
        const res = await makeAuthenticatedRequest(
          `https://api.holocrow.com/api/regions/cities-authenticated?country=${selectedCountry}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setCities(data.results);
      }
    };

    fetchCities();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedCountry && selectedCity) {
        const res = await makeAuthenticatedRequest(
          `https://api.holocrow.com/api/regions/districts-authenticated/?city=${selectedCity}&country=${selectedCountry}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setDistricts(data.results);
      }
    };

    fetchDistricts();
  }, [selectedCountry, selectedCity]);

  // handlers
  const handleCountryChange = async (event) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  };

  ////////////////////////////////////////
  ////////////////////////////////////////
  async function handleLocation(data, e) {
    e.preventDefault();
    dispatch({
      type: "SUBMIT/LOCATION",
      payload: {
        ...data,
        parent: null,
        is_active: true,
      },
    });
    setCurrStep(4);
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleLocation)}>
      <>
        <p className="text-left text-primary font-semibold mb-8 ">
          Add Location
        </p>
        <FormRow id="name" label="Location Name:" error={errors?.name?.message}>
          <Input
            placeHolder="Eg: Home"
            id="name"
            register={register}
            validation={{
              required: "This field is required",
            }}
          />
        </FormRow>
        <FormRow id="country" label="Country:" error={errors?.country?.message}>
          <select
            id="country"
            {...register("country", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
            onChange={handleCountryChange}
          >
            <option value="">choose a country:</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name[activeLanguage]}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow id="city" label="City:" error={errors?.city?.message}>
          <select
            disabled={!selectedCountry}
            id="city"
            {...register("city", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
            onChange={handleCityChange}
          >
            <option value="">choose a city:</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow
          id="district"
          label="District:"
          error={errors?.district?.message}
        >
          <select
            id="district"
            disabled={!selectedCity}
            {...register("district", {
              required: "This field is required",
            })}
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
          >
            <option value="">choose a district:</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </FormRow>
      </>

      <div className="flex items-center justify-between">
        <Button type="signup">Add Location</Button>
      </div>
    </form>
  );
}

export default LocationForm;
