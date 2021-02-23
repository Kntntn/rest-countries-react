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
              <p><b>Native Name:</b> {currentCountry.nativeName}</p>
              <p><b>Population:</b> {currentCountry.population}</p>
              <p><b>Region:</b> {currentCountry.region}</p>
              <p><b>Sub Region:</b> {currentCountry.subregion}</p>
              <p><b>Capital:</b> {currentCountry.capital}</p>
            </div>

            <div>
              <p><b>Top Level Domain:</b> {currentCountry.topLevelDomain}</p>
              {currentCountry.currencies.map((currency) => (
                <p><b>Currencies:</b> {currency.name}</p>
              ))}
              <p><b>Languages:</b> {getDataListed("languages")}</p>
            </div>

          </div>

          <div className="border-countries">
            <p><b>Border Countries:</b></p>
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
