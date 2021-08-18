//COMPONENTS
import SearchArea from "./M-F-SearchArea";
import FilterContinent from "./M-F-FilterContinent";
import FilterLanguage from "./M-F-FilterLanguage";

const Filters = (props) => {
  return (
    <form className="filters">
      <SearchArea handleFilters={props.handleFilters} />
      <div className="filters__dropdowns">
        <FilterContinent handleFilters={props.handleFilters} />
        <FilterLanguage handleFilters={props.handleFilters} />
        <button
          className="filters__reset"
          onClick={props.handleFilterReset}
          title="Reset filters"
        >
          <i className="fas fa-redo-alt filters__reset-icon"></i>
        </button>
      </div>
    </form>
  );
};

export default Filters;
