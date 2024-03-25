import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./topLeaguesNav.css";
import { Arrow_Icon } from "../icons";
const TopLeaguesNav = ({ topLeagues }) => {
  const [activeLeagueId, setActiveLeagueId] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const reduxStateValue = useSelector(
    (state) => state.SportsDisciplineReducer.disciplineName
  );

  useEffect(() => {
    setActiveLeagueId("");
  }, [reduxStateValue]);

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {window.innerWidth <= 431 ? (
        <nav className="top-leagues-nav mobile-top-leagues-nav">
          <div className="top-leagues-title">
            <p>Top leagues</p>
            <button onClick={() => toggleNavigation()}>
              <Arrow_Icon
                className={`leagues-arrow ${
                  isExpanded && "leagues-arrow-rotate"
                }`}
              />
            </button>
          </div>

          {isExpanded &&
            topLeagues.map(
              (league) =>
                location.pathname.startsWith(league.path) && (
                  <ul key={league.id}>
                    {league.leagues.map((subLeague, index) => {
                      return (
                        <li
                          className={activeLeagueId === index && "active-li"}
                          onClick={() => {
                            return (
                              setActiveLeagueId(index), toggleNavigation(false)
                            );
                          }}
                          key={subLeague.id}
                        >
                          <img
                            style={{ width: "18px" }}
                            src={subLeague?.countryFlag}
                            alt={league.name + " logo"}
                          />
                          <Link
                            className="_navLink"
                            to={`${league.path}/${subLeague.pathName}`}
                            data-games-id={league.gamesId}
                            data-host-id={league.dataHost}
                            data-league-id={subLeague.lid}
                          >
                            {subLeague.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )
            )}
        </nav>
      ) : (
        <nav className="top-leagues-nav">
          <p className="top-leagues-title">Top leagues</p>
          {topLeagues.map(
            (league) =>
              location.pathname.startsWith(league.path) && (
                <ul key={league.id}>
                  {league.leagues.map((subLeague, index) => {
                    return (
                      <li
                        className={activeLeagueId === index && "active-li"}
                        onClick={() => setActiveLeagueId(index)}
                        key={subLeague.id}
                      >
                        <img
                          style={{ width: "18px" }}
                          src={subLeague?.countryFlag}
                          alt={league.name + " logo"}
                        />
                        <Link
                          className="_navLink"
                          to={`${league.path}/${subLeague.pathName}`}
                          data-games-id={league.gamesId}
                          data-host-id={league.dataHost}
                          data-league-id={subLeague.lid}
                        >
                          {subLeague.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )
          )}
        </nav>
      )}
    </>
  );
};

export default TopLeaguesNav;
