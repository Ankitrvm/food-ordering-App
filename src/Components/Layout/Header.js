import { Fragment } from "react";
import FoodImage from "../../Images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {" "}
        <h2>Meals To Go</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={FoodImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
