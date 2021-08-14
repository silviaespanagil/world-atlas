import { Link } from "react-router-dom";

const HorizontalMenu = () => {
  return (
    <div className="hMenu">
      <Link to="/">
        <h1 className="hMenu__title">World Atlas</h1>
      </Link>

      <nav>
        <ul className="hMenu__ul">
          <Link to="/">
            <li className="hMenu__item">Home</li>
          </Link>
          <Link to="/favoritos">
            <li className="hMenu__item">Favoritos</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default HorizontalMenu;
