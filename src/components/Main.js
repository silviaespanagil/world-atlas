import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import CountryList from "./M-CountryList";

const Main = () => {
  //STATES
  //MAIN
  const [countries, setCountries] = useState();

  //API
  useEffect(() => {
    const apiURL = "https://restcountries.eu/rest/v2/all";

    axios.get(apiURL).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path={["/", "/countries"]}>
          <CountryList countries={countries} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
