import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <>
      <Link to="/" className="backButton">
        <i className="fas fa-lg fa-arrow-left backButton__arrow" />
        <small className="backButton__text">Back</small>
      </Link>
    </>
  );
};
export default BackButton;
