import React, { useState } from "react";
import Filter from "./Filter";
import Countries from "./Countries";
import Details from "./Details";

const Main = ({ allCountries, countries, onInput, selectOption }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentCountry, setCurrentCountry] = useState([]);

  const openDetails = (e) => {
    setShowDetails(true);
    setCurrentCountry(allCountries.filter((singleCountry) => singleCountry.name === e)[0]);
  };

  const closeDetails = (e) => {
    setShowDetails(false);
  };

  return (
    <main>
      {showDetails ? (
        <Details back={closeDetails} allCountries={allCountries} countryClicked={currentCountry}/>
      ) : (
        <>
          <Filter onKeyup={onInput} selectOption={selectOption} />
          <Countries countries={countries} openDetails={openDetails} />
        </>
      )}
    </main>
  );
};

export default Main;
