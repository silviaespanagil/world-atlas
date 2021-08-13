const CountryCard = (props) => {
  return (
    <>
      <img src={props.flag} alt={`flag of ${props.name}`} />
      <h2>{props.name}</h2>
      <p>{props.nativeName}</p>
    </>
  );
};
export default CountryCard;
