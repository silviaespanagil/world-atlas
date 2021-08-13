import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import CountryList from "./M-CountryList";
import CountryDetail from "./M-CountryDetail";

const Main = () => {
  //STATES
  //MAIN
  const [countries, setCountries] = useState();

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
          <CountryList countries={countries} />{" "}
        </Route>
        <Route path="/countries/:id" render={renderCountryDetail} />
      </Switch>
    </main>
  );
};

export default Main;
