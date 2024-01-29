import { useEffect, useState } from "react";
import Button from "../Button";
import FormRow from "../FormRow";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { makeAuthenticatedRequest } from "../../../utils/funcs";

function LocationForm() {
  const { activeLanguage } = useLanguage();

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
    async function getUserData() {
      const res = await makeAuthenticatedRequest(
        "https://api.holocrow.com/api/accounts/get-data/",
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error("Error getting users data...");
      const data = await res.json();
      return data;
    }
    getUserData();
  }, []);

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
      setSelectedCountry(data.results[0].id);
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

        // Set the selected city to the first city in the list
        setSelectedCity(data.results[0]?.id);
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

    // Fetch cities for the selected country
    const res = await makeAuthenticatedRequest(
      `https://api.holocrow.com/api/regions/cities-authenticated?country=${newCountry}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setCities(data.results);

    setSelectedCity(data.results[0]?.id);
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  };

  async function handleLocation() {
    console.log("Location submitted successfuly.");
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleLocation)}>
      <>
        <p className="text-left text-primary text-3xl font-semibold mb-8 2xl:text-4xl">
          Add Location
        </p>
        <FormRow id="country" label="Country:">
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
