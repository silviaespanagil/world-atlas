import { useState } from "react";
import { Link } from "react-router-dom";

//PACKAGES
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  const [isClosed, setClosed] = useState();

  const closeMenuHandler = () => {
    if (isClosed === false) {
      return setClosed(true);
    } else {
      setClosed(false);
    }
  };
  return (
    <div className="burgerMenu">
      <Menu isOpen={isClosed} width={280}>
        <Link to="/" className="menu__item" onClick={closeMenuHandler}>
          Home
        </Link>
        <Link to="/favoritos" className="menu__item" onClick={closeMenuHandler}>
          Favorites
        </Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
