//COMPONENT
import CountryCard from "./M-CountryCard";

const CountryList = (props) => {
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
          aria-label="favorite icon button"
        >
          <i
            className={isFavorite ? "fas fa-lg fa-star" : "far fa-lg fa-star"}
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
