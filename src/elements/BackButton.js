import { Link } from "react-router-dom";

const BackButton = (props) => {
  return (
    <>
      <Link to="/" className="backButton" onClick={props.handleFilterReset}>
        <i className="fas fa-lg fa-arrow-left backButton__arrow" />
        <small className="backButton__text">Back</small>
      </Link>
    </>
  );
};
export default BackButton;
