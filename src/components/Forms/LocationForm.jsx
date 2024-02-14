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
    async function getCountries(url) {
      const res = await makeAuthenticatedRequest(url, {
        method: "GET",
      });
      if (!res.ok) throw new Error("Error fetching countries...");
      const data = await res.json();

      // Update countries with new results
      setCountries((prev) => {
        const uniqueResults = data.results.filter(
          (result) => !prev.some((prevResult) => prevResult.id === result.id)
        );
        return [...prev, ...uniqueResults];
      });

      if (data.next) {
        getCountries(data.next);
      }

      setCountries(data.results);
    }
    getCountries(
      "https://api.holocrow.com/api/regions/countries-authenticated/"
    );
  }, []);

  useEffect(() => {
    // Fetch cities for the selected country
    const fetchCities = async (url) => {
      if (selectedCountry) {
        const res = await makeAuthenticatedRequest(
          // ,
          url,
          {
            method: "GET",
          }
        );
        const data = await res.json();

        // Update cities with new results
        setCities((prev) => {
          const uniqueResults = data.results.filter(
            (result) => !prev.some((prevResult) => prevResult.id === result.id)
          );
          return [...prev, ...uniqueResults];
        });

        if (data.next) {
          fetchCities(data.next);
        }
      }
    };

    fetchCities(
      `https://api.holocrow.com/api/regions/cities-authenticated?country=${selectedCountry}`
    );
  }, [selectedCountry]);

  useEffect(() => {
    const fetchDistricts = async (url) => {
      if (selectedCountry && selectedCity) {
        const res = await makeAuthenticatedRequest(url, {
          method: "GET",
        });
        const data = await res.json();
        // Update districts with new results
        setDistricts((prev) => {
          const uniqueResults = data.results.filter(
            (result) => !prev.some((prevResult) => prevResult.id === result.id)
          );
          return [...prev, ...uniqueResults];
        });

        if (data.next) {
          fetchDistricts(data.next);
        }
        setDistricts(data.results);
      }
    };

    fetchDistricts(
      `https://api.holocrow.com/api/regions/districts-authenticated/?city=${selectedCity}&country=${selectedCountry}`
    );
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
