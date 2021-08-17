import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//SERVICES
import localStorage from "../services/LocalStorage";

//COMPONENTS
import CountryList from "./M-CountryList";
import CountryDetail from "./M-CountryDetail";
import Filters from "./M-Filters";

const Main = () => {
  //LOCALSTORAGE - GET
  const localCountries = localStorage.get("Countries", []);

  //STATES
  //MAIN
  const [countries, setCountries] = useState(localCountries);
  const [favorites, setFavorites] = useState();

  //FILTERS
  const [userCountrySearch, setUserCountrySearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("All");
  const [languageFilter, setLanguageFilter] = useState("All");

  //API
  useEffect(() => {
    const apiURL = "https://restcountries.eu/rest/v2/all";
    if (localCountries.length === 0) {
      axios.get(apiURL).then((res) => {
        setCountries(res.data);
      });
    }
  }, [localCountries]);

  //LOCALSTORAGE - SET
  useEffect(() => {
    localStorage.set("Countries", countries);
  });

  if (!countries) return null;

  //HANDLE FILTERS
  const handleFilters = (filterData) => {
    if (filterData.key === "country") {
      setUserCountrySearch(filterData.searchValue);
    }
    if (filterData.key === "continent") {
      setContinentFilter(filterData.continentValue);
    }
    if (filterData.key === "language") {
      setLanguageFilter(filterData.languageValue);
    }
  };

  //RENDER FILTERS

  const renderFilters = countries
    .filter((country) => {
      return (
        country.name.toLowerCase().includes(userCountrySearch) ||
        country.capital.toLowerCase().includes(userCountrySearch)
      );
    })
    .filter((country) => {
      if (continentFilter === "All") {
        return true;
      } else {
        return country.region === continentFilter;
      }
    })
    .filter((country) => {
      if (languageFilter === "All") {
        return true;
      } else {
        const language = country.languages.map((language) => {
          return language.name;
        });
        return language.includes(languageFilter);
      }
    });

  //RENDER DINAMIC ROUTE FOR COUNTRY DETAIL
  const renderCountryDetail = (routerProps) => {
    const routerId = routerProps.match.params.id;
    const countryFound = countries.find(
      (country) => country.alpha2Code === routerId
    );
    if (countryFound) {
      return <CountryDetail country={countryFound} />;
    }
  };

  return (
    <main className="main">
      <Switch>
        <Route exact path={["/", "/countries"]}>
          <Filters handleFilters={handleFilters} />
          <CountryList countries={renderFilters} />
        </Route>
        <Route path="/countries/:id" render={renderCountryDetail} />
      </Switch>
    </main>
  );
};

export default Main;
