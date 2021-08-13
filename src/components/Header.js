import { Link } from "react-router-dom";

//COMPONENTS
import HorizontalMenu from "./H-HorizontalMenu";

//PACKAGES
import { slide as Menu } from "react-burger-menu";

const Header = (props) => {
  return (
    <header>
      <Menu width={280}>
        <Link to="/" className="menu__item">
          Home
        </Link>
        <Link to="/favoritos">Favorites</Link>
      </Menu>
      <HorizontalMenu />
    </header>
  );
};
export default Header;
