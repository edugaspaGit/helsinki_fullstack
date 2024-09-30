import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setAllCountries(response.data);
      });
  }, []);

  const handleChange = (event) => {
    const countryName = event.target.value;
    setCountry(countryName);

    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );
    setCountries(filteredCountries);
  };
  return (
    <div>
      Country: <input value={country} onChange={handleChange} />
      <Countries countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
