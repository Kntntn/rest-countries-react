import { useState } from "react";

const Details = ({ back, allCountries, countryClicked }) => {
  const [currentCountry, setCurrentCountry] = useState(countryClicked);

  const getDataListed = (attribute) => {
    // Access languages/currencies array in the country object
    const items = currentCountry[attribute];
    // For each item in this array, return the "name" property to a var joined to a string
    return items.map((item) => item.name).join(", ");
  };

  const getBorderCountryName = (code) => {
    const matchingCountry = allCountries.find(country => {
      return country.alpha3Code === code;
    })
    return matchingCountry.name;
  }

  return (
    <main className="details">
      <button onClick={back} className="btn-back">
        <i className="fas fa-long-arrow-alt-left"></i> Back
      </button>
      <div className="content-details">
        <img src={currentCountry.flag} alt="" />
        <div className="info-country">
          <h1>{currentCountry.name}</h1>

          <div className="stats-country">

            <div>
              <p>Native Name: {currentCountry.nativeName}</p>
              <p>Population: {currentCountry.population}</p>
              <p>Region: {currentCountry.region}</p>
              <p>Sub Region: {currentCountry.subregion}</p>
              <p>Capital: {currentCountry.capital}</p>
            </div>

            <div>
              <p>Top Level Domain: {currentCountry.topLevelDomain}</p>
              {currentCountry.currencies.map((currency) => (
                <p>Currencies: {currency.name}</p>
              ))}
              <p>Languages: {getDataListed("languages")}</p>
            </div>

          </div>

          <div className="border-countries">
            <p>Border Countries:</p>
            <div className="border-countries-list">
              {currentCountry.borders.map((borderCountry) => (
                <p className="border-country">{getBorderCountryName(borderCountry)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
