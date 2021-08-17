//COMPONENT
import BackButton from "../elements/BackButton";

//IMAGES
import map from "../images/map.gif";

const NoExist = () => {
  return (
    <section className="noExist">
      <BackButton />
      <p className="noExist__text">
        Ops, you got lost. This page does not exist.
      </p>
      <img src={map} alt="Unfolding map gif" className="noExist__img" />
    </section>
  );
};

export default NoExist;
