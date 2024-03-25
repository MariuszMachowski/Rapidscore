import React from "react";
import logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Moon_Icon, Sun_Icon } from "../icons";
import { changeTheme } from "../redux/actions";
import "./header.css";
const Header = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.ThemeReducer.isDarkTheme);

  const handleClick = () => {
    window.location.href = "/football";
  };
  const handleChangeTheme = () => {
    dispatch(changeTheme(!isDarkTheme));
  };

  return (
    <header className="header-wrapper">
      <div className="logo-wrapper">
        <img className="logo" src={logo} onClick={handleClick}></img>
      </div>
      <div class="btn" onClick={handleChangeTheme}>
        <div class={isDarkTheme ? "btn__indicator dark" : "btn__indicator"}>
          <div class="btn__icon-container">
            {isDarkTheme ? (
              <Moon_Icon className="moon" fill={"#fff"} />
            ) : (
              <Sun_Icon className="sun" fill="orange" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
