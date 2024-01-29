import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

function LocationForm() {
  const { activeLanguage } = useLanguage();
  const { accessToken } = useAuth().state;

  const [curCountry, setCurCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getCountries() {
      const res = await fetch(
        `https://api.holocrow.com/api/regions/countries-authenticated/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);
      if (!res.ok) throw new Error("Error fetching countries...");
      const data = await res.json();
      setCountries(data.results);
    }
    getCountries();
  }, [accessToken]);

  console.log(accessToken);
  console.log(countries);

  // handlers
  async function handleCountryChange(e) {
    setCurCountry(e.target.value);
    const res = await fetch(
      `https://api.holocrow.com/api/regions/cities-authenticated?country=${curCountry}
      `,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(res);
    if (!res.ok) throw new Error("Error fetching cities...");
    const data = await res.json();
    setCities(data.results);
  }

  async function handleCityChange(e) {
    const city = e.target.value;
    const res = await fetch(
      `https://api.holocrow.com/api/regions/districts-authenticated/?city=${city}&country=${curCountry}

      `,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(res);
    if (!res.ok) throw new Error("Error fetching districs...");
    const data = await res.json();
    setDistricts(data.results);
  }

  async function handleLocation() {
    console.log("Location submitted successfuly.");
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleLocation)}>
      <>
        <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
          Add Location
        </p>
        <FormRow
          id="country"
          label="Country:"
          // error={errors?.username?.message}
        >
          <select
            id="country"
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
            onChange={handleCountryChange}
          >
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name[activeLanguage]}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow id="city" label="City:">
          <select
            id="country"
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
            onChange={handleCityChange}
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </FormRow>
        <FormRow id="district" label="District:">
          <select
            id="country"
            className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
          >
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
