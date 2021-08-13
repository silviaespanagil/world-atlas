//COMPONENT
import CountryCard from "./M-CountryCard";

const CountryList = (props) => {
  const country = props.countries.map((country) => {
    return (
      <li>
        <CountryCard
          name={country.name}
          nativeName={country.nativeName}
          flag={country.flag}
        />
      </li>
    );
  });
  return (
    <section>
      {" "}
      <ul>{country}</ul>
    </section>
  );
};
export default CountryList;
