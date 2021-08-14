const FilterContinent = (props) => {
  const handleContinent = (ev) => {
    props.handleFilters({ continentValue: ev.target.value, key: "continent" });
  };

  return (
    <label htmlFor="continent" className="filters__label">
      Filter by Continent
      <select
        id="continent"
        name="continent"
        className="filters__select"
        onChange={handleContinent}
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </label>
  );
};

export default FilterContinent;
