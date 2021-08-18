//COMPONENT
import BackButton from "../elements/BackButton";

//IMAGES
import noFav from "../images/noFavs.gif";

const NoFavorites = (props) => {
  return (
    <section className="noFav">
      <h2 className="noFav__title">Favorite countries</h2>
      <img
        src={noFav}
        alt="Gif of a localization pin spinning"
        className="noFav__img"
      />
      <p className="noFav__paragraph">
        You have no favorite countries yet...go back and add some
      </p>
      <BackButton handleFilterReset={props.handleFilterReset} />
    </section>
  );
};
export default NoFavorites;
