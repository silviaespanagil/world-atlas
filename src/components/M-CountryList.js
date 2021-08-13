//COMPONENT
import CountryCard from "./M-CountryCard";

const CountryList = (props) => {
  const country = props.countries.map((country) => {
    return (
      <li className="countryList__card">
        <CountryCard
          name={country.name}
          flag={country.flag}
          nativeName={country.nativeName}
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
