//IMAGES
import Earth from "../images/earth.gif";

const NoResults = (props) => {
  return (
    <section className="noResults">
      <p className="noResults__text">
        There is no country or capital called{" "}
        <span className="noResults__text--search">
          {props.userCountrySearch}
        </span>{" "}
        Try again!
      </p>
      <img
        src={Earth}
        alt="Gif of the globe spinning"
        className="noResults__img"
      />
    </section>
  );
};

export default NoResults;
