import { Link } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <>
      <Link
        to={`/countries/${props.alpha2Code}`}
        className="countryList__card--linkWrap"
      >
        <img
          src={props.flag}
          alt={`flag of ${props.name}`}
          className="countryList__card--flag"
        />
        <h2 className="countryList__card--name">{props.name}</h2>
        <p className="countryList__card--native">{props.nativeName}</p>
      </Link>
    </>
  );
};
export default CountryCard;
