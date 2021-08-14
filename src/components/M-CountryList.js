//COMPONENT
import CountryCard from "./M-CountryCard";

const CountryList = (props) => {
  const country = props.countries.map((country, index) => {
    return (
      <li className="countryList__card" key={index}>
        <CountryCard
          name={country.name}
          flag={country.flag}
          nativeName={country.nativeName}
          alpha2Code={country.alpha2Code}
        />
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
