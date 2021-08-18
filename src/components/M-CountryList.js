//COMPONENT
import CountryCard from "./M-CountryCard";
import NoResults from "./M-F-NoResults";

const CountryList = (props) => {
  //RENDER NO RESULTS
  if (props.countries.length === 0) {
    return <NoResults userCountrySearch={props.userCountrySearch} />;
  }

  //RENDER COUNTRIES
  const country = props.countries.map((country, index) => {
    const isFavorite = props.favorites.find(
      (favorite) => favorite.alpha2Code === country.alpha2Code
    );
    return (
      <li className="countryList__card" key={index}>
        <CountryCard
          name={country.name}
          flag={country.flag}
          nativeName={country.nativeName}
          alpha2Code={country.alpha2Code}
        />{" "}
        <button
          id={index}
          onClick={() => props.favCountry(country.alpha2Code)}
          className="countryList__card--favorite"
          aria-label="favorite icon button"
        >
          <i
            className={
              isFavorite
                ? "fas fa-lg fa-star countryList__card--favorite-icon"
                : "far fa-lg fa-star countryList__card--favorite-icon"
            }
            title="Add to favorites"
          ></i>
        </button>
      </li>
    );
  });
  return (
    <section className="countries">
      <ul className="countryList">{country}</ul>
    </section>
  );
};

export default CountryList;
