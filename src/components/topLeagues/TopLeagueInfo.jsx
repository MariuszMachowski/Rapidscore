import React, { useEffect } from "react";
import "./topLeaguesNav.css";
const TopLeagueInfo = ({ league, leagueInfo, accesKey }) => {
  const currentUrl = window.location.href;
  useEffect(() => {
    const handleClick2 = (event) => {
      if (!event.target.matches("._navLink")) return;
      event.preventDefault();
      let gamesId = event.target.getAttribute("data-games-id");
      let hostId = event.target.getAttribute("data-host-id");
      let leagueId = event.target.getAttribute("data-league-id");
      let standings = document.querySelector(".results-info");
      if (standings) {
        standings.innerHTML = "";
        standings.setAttribute("data-games-id", gamesId);
        standings.setAttribute("data-host-id", hostId);
        standings.setAttribute("data-league-id", leagueId);
        window.document.dispatchEvent(
          new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true,
          })
        );
      }
    };

    document.addEventListener("click", handleClick2);
    return () => {
      document.removeEventListener("click", handleClick2);
    };
  }, [currentUrl]);

  return (
    <div className="league-info-wrapper">
      <div
        className="results-info scoreboard"
        id={league.standingId}
        data-host={league?.dataHost}
        data-key={accesKey}
        data-league={leagueInfo.lid}
        data-season={leagueInfo.year}
        data-theme=""
        data-show-errors="false"
        data-show-logos="true"
        class="wg_loader"
      ></div>
      <div
        className="results-info"
        id={league?.gamesId}
        data-host={league?.dataHost}
        data-key={accesKey}
        data-date=""
        data-league={leagueInfo.lid}
        data-season={leagueInfo.year}
        data-theme=""
        data-refresh=""
        data-show-toolbar="true"
        data-show-errors="false"
        data-show-logos="false"
        data-modal-game="true"
        data-modal-standings="true"
        data-modal-show-logos="true"
      ></div>
    </div>
  );
};

export default TopLeagueInfo;
