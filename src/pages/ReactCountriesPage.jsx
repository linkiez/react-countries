import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import { countries } from "../data/countries";
import Countries from "../components/Countries";
import Country from "../components/Country";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const filteredCountries =
    countryFilter.trim().length >= 3
      ? countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(countryFilter.trim().toLowerCase());
        })
      : countries;

  const [visitedCountries, setVisitedCountries] = useState([]);

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter(
        (visitedCountryId) => visitedCountryId !== countryId
      );
    } else {
      newVisitedCountries.push(countryId);
    }
    setVisitedCountries(newVisitedCountries);
  }

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

        {/* <Countries visitedCountries={visitedCountries} onCountryClick={toggleVisitedCountry}>
          {filteredCountries}
        </Countries> */}
        <Countries>
          
            <h2 className="text-center font-semibold">
              {countries.length} pais(es)
            </h2>
            <h3 className="text-center font-semibold text-sm">
              {visitedCountries.length} pais(es) visitados
            </h3>
          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.cca3) !== -1;
            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
                key={country.cca3}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </div>
  );
}
