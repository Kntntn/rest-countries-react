import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setItems] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme)
  };

  const search = (name) => {
    if (name === "") {
      setItems(allCountries);
    } else {
      setItems(
        allCountries.filter((singleCountry) =>
          singleCountry.name.includes(name)
        )
      );
    }
  };

  const selectOption = (e) => {
    const region = e.target.getAttribute("value");
    setItems(
      allCountries.filter((singleCountry) => singleCountry.region === region)
    );
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setAllCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Header toggleTheme={toggleTheme} />
          <Main
            allCountries={allCountries}
            countries={countries}
            onInput={search}
            selectOption={selectOption}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
