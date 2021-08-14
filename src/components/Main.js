import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import CountryList from "./M-CountryList";
import CountryDetail from "./M-CountryDetail";
//FILTER COMPONENTS
import SearchArea from "./M-F-SearchArea";
import FilterContinent from "./M-F-FilterContinent";

const Main = () => {
  //STATES
  //MAIN
  const [countries, setCountries] = useState();

  //FILTERS
  const [userCountrySearch, setUserCountrySearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("");

  //API
  useEffect(() => {
    const apiURL = "https://restcountries.eu/rest/v2/all";

    axios
      .get(apiURL)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [countries]);

  if (!countries) return null;

  //HANDLE FILTERS
  const handleFilters = (filterData) => {
    if (filterData.key === "country") {
      setUserCountrySearch(filterData.searchValue);
    }
    if (filterData.key === "continent") {
      setContinentFilter(filterData.continentValue);
    }
  };

  //RENDER FILTERS

  const renderFilters = countries
    .filter((country) => {
      return country.name.toLowerCase().includes(userCountrySearch);
    })
    .filter((country) => {
      if (continentFilter === "All") {
        return true;
      } else {
        return country.region === continentFilter;
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
          <SearchArea handleFilters={handleFilters} />
          <form>
            <FilterContinent handleFilters={handleFilters} />
          </form>
          <CountryList countries={renderFilters} />{" "}
        </Route>
        <Route path="/countries/:id" render={renderCountryDetail} />
      </Switch>
    </main>
  );
};

export default Main;
