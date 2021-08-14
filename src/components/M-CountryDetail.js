//COMPONENTS
import BackButton from "../elements/BackButton";

const CountryDetail = (props) => {
  const timeZone = props.country.timezones.map((time, index) => {
    return <p key={index}>{time}</p>;
  });

  const currency = props.country.currencies.map((currency, index) => {
    return (
      <>
        <p key={index}>
          {currency.name} {currency.symbol}
        </p>
      </>
    );
  });

  const officialLanguages = props.country.languages.map((language, index) => {
    return (
      <p key={index}>
        {language.name} / {language.nativeName}
      </p>
    );
  });
  return (
    <>
      <BackButton />
      <article className="cDetail" key={props.country.alpha3Code}>
        <img
          src={props.country.flag}
          alt={`Flag of ${props.country.name}`}
          className="cDetail__flag"
        />
        <h2 className="cDetail__title">
          Welcome to{" "}
          <span className="cDetail__title--country">{props.country.name}</span>
        </h2>
        <div className="cDetail__information">
          <h3 className="cDetail__information--capital">
            {props.country.capital}
          </h3>
          <h4 className="cDetail__information--timezone">Timezones</h4>
          {timeZone}
          <h4 className="cDetail__information--currency">Actual currency</h4>
          {currency}
        </div>
        <div className="cDetail__socialInformation">
          <h4 className="cDetail__socialInformation--population">Population</h4>
          <p key={props.country.alpha2Code}>
            {props.country.population} people
          </p>
          <h4 className="cDetail__socialInformation--language">
            Official languages
          </h4>
          {officialLanguages}
        </div>
        <iframe
          className="cDetail__map"
          title="Map representation"
          src={`http://maps.google.com/maps?q=${props.country.latlng[0]},${props.country.latlng[1]}&t=&z=4&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </article>
    </>
  );
};
export default CountryDetail;
