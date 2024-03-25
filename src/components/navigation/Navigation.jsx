import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDisciplineName } from "../redux/actions";
import "./navigation.css";
const Navigation = ({ sportsList, isDarkTheme }) => {
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleMouseEnter = (id) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  function handleLinkClick(sport) {
    dispatch(updateDisciplineName(sport));
  }

  return (
    <nav className="navigation-wrapper">
      {sportsList.map((sport) => (
        <Link
          class="_navLink"
          key={sport.id}
          to={`/${sport.pathName}`}
          onClick={() => handleLinkClick(sport.pathName)}
        >
          <button
            className={
              decodeURIComponent(location.pathname).includes(
                `/${sport.pathName}`
              )
                ? "_link active-link"
                : "_link"
            }
            data-games-id={sport.gamesId}
            data-host-id={sport.dataHost}
            onMouseEnter={() => handleMouseEnter(sport.id)}
            onMouseLeave={handleMouseLeave}
          >
            {sport.icon(
              decodeURIComponent(location.pathname).includes(
                `/${sport.pathName}`
              ),
              sport.id === isHovered,
              isDarkTheme
            )}
            {sport.name}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
