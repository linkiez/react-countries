import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import { countries } from "../data/countries";
import Countries from "../components/Countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('Argentina');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const filteredCountries = countryFilter.trim().length >= 3 ? countries.filter((country) => {
    return country.name.common.toLowerCase().includes(countryFilter.trim().toLowerCase());
  }): countries;
  
  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do pais (pelo menos 3 caracteres)"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        ></TextInput>

        <Countries>{filteredCountries}</Countries>
      </Main>
    </div>
  );
}
