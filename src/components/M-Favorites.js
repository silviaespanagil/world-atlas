//COMPONENTS
import CountryCard from "./M-CountryCard";
import NoFavorites from "./M-NoFavorites";

const Favorites = (props) => {
  //RENDER NO FAVORITES COMPONENT
  if (props.favorites.length === 0) {
    return <NoFavorites handleFilterReset={props.handleFilterReset} />;
  }

  const favoriteCountries = props.favorites.map((favorite, index) => {
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
            className="fas fa-lg fa-trash-alt countryList__card--favorite-icon"
            title="Delete from favorites"
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
