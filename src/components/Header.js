//COMPONENTS
import BurgerMenu from "./H-BurgerMenu";
import HorizontalMenu from "./H-HorizontalMenu";

const Header = (props) => {
  return (
    <header>
      <BurgerMenu />
      <HorizontalMenu />
    </header>
  );
};
export default Header;
