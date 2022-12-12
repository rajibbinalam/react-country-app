import React, { useState, useEffect } from "react";
import "./App.css";
import { Countries } from "./Components/Countries";
import Search from "./Components/Search";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsloading(false);
      setError("");
    } catch (error) {
      setIsloading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const removeCounty = (name) => {
    const filterData = countries.filter(
      (country) => country.name.common !== name
    );
    return setCountries(filterData);
  };

  const handleSearch = (search) => {
    const searchValue = search.toLowerCase();
     const filterCountries = countries.filter((country) => {
        const contryName = country.name.common.toLowerCase();
        return contryName.startsWith(searchValue);
      });
      setCountries(filterCountries)
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h2>Country App</h2>
      <small>Total: {countries.length}</small>
      <Search onSearch={handleSearch} />
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <Countries countries={countries} removeCountry={removeCounty} />
    </div>
  );
}

export default App;
