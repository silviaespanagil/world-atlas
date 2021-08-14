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
      </div>
    </form>
  );
};

export default Filters;
