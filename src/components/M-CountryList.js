//COMPONENT
import CountryCard from "./M-CountryCard";

const CountryList = (props) => {
  const country = props.countries.map((country) => {
    return (
      <li>
        <CountryCard
          name={country.name}
          nativeName={country.nativeName}
          capital={country.capital}
          flag={country.flag}
        />
      </li>
    );
  });
  return <ul>{country}</ul>;
};
export default CountryList;
