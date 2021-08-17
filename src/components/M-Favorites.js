//COMPONENTS
import CountryCard from "./M-CountryCard";
import NoFavorites from "./M-NoFavorites";

const Favorites = (props) => {
  //RENDER NO FAVORITES COMPONENT
  if (props.favorites.length === 0) {
    return <NoFavorites />;
  }

  const favoriteCountries = props.favorites.map((favorite, index) => {
    const isFavorite = props.countries.find(
      (country) => favorite.alpha2Code === country.alpha2Code
    );
    return (
      <li className="countryList__card" key={index}>
        <CountryCard
          name={favorite.name}
          flag={favorite.flag}
          nativeName={favorite.nativeName}
          alpha2Code={favorite.alpha2Code}
        />
        <button
          id={index}
          onClick={() => props.favCountry(favorite.alpha2Code)}
          className="countryList__card--favorite"
          aria-label="favorite icon button"
        >
          <i
            className={
              isFavorite
                ? "fas fa-lg fa-star countryList__card--favorite-icon"
                : "far fa-lg fa-star countryList__card--favorite-icon"
            }
          ></i>
        </button>
      </li>
    );
  });

  return (
    <section className="favorites">
      <h2 className="favorites__title">Favorite countries</h2>
      <ul className="favorites__list">{favoriteCountries}</ul>
    </section>
  );
};

export default Favorites;
