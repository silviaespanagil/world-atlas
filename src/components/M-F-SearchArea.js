const SearchArea = (props) => {
  //SEARCH BOX HANDLER TAKES USER SEARCH
  const handleSearchBox = (ev) => {
    props.handleFilters({
      searchValue: ev.target.value.toLowerCase(),
      key: "country",
    });
  };

  //PREVENT DEFAULT WHEN USER TAP "ENTER"
  const preventDefault = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="searchArea__form" onSubmit={preventDefault}>
      <label htmlFor="searchBar" className="searchArea__form--search">
        <input
          id="search"
          type="search"
          placeholder="Search a country or capital"
          className="searchArea__form--search-input"
          onChange={handleSearchBox}
        />
      </label>
    </form>
  );
};
export default SearchArea;
