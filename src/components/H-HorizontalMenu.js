import { Link } from "react-router-dom";

const HorizontalMenu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h1 className="menu__title">World Atlas</h1>
      </Link>

      <nav>
        <ul className="menu__ul">
          <Link to="/">
            <li className="menu__item">Home</li>
          </Link>
          <Link to="/favoritos">
            <li className="menu__item">Favoritos</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default HorizontalMenu;
