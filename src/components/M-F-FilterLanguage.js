const FilterLanguage = (props) => {
  const languages = [
    "All",
    "Chinese",
    "English",
    "French",
    "German",
    "Hindi",
    "Italian",
    "Spanish",
    "Portuguese",
    "Russian",
  ];

  const handleLanguage = (ev) => {
    props.handleFilters({ languageValue: ev.target.value, key: "language" });
  };

  const renderLanguages = languages.map((language) => {
    return <option value={language}>{language}</option>;
  });

  return (
    <label className="filters__label" htmlFor="language">
      Filter by Language
      <select
        id="language"
        name="language"
        className="filters__select"
        onChange={handleLanguage}
      >
        {renderLanguages}
      </select>
    </label>
  );
};

export default FilterLanguage;
