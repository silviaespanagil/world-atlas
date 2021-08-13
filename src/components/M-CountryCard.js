const CountryCard = (props) => {
  return (
    <>
      <img
        src={props.flag}
        alt={`flag of ${props.name}`}
        className="countryList__card--flag"
      />
      <h2 className="countryList__card--name">{props.name}</h2>
      <p className="countryList__card--native">{props.nativeName}</p>
    </>
  );
};
export default CountryCard;
