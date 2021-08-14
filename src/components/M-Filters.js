//COMPONENTS
import SearchArea from "./M-F-SearchArea";
import FilterContinent from "./M-F-FilterContinent";

const Filters = (props) => {
  return (
    <form className="filters">
      <SearchArea handleFilters={props.handleFilters} />
      <FilterContinent handleFilters={props.handleFilters} />
    </form>
  );
};

export default Filters;
