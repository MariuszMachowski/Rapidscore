import React, { useEffect } from "react";
import "./sportsDiscipline.css";
const SportsDiscipline = ({ sport, accesKey }) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.matches("._link")) return;
      event.preventDefault();
      let gamesId = event.target.getAttribute("data-games-id");
      let hostId = event.target.getAttribute("data-host-id");
      let standings = document.querySelector(".results-info");
      if (standings) {
        standings.innerHTML = "";
        standings.setAttribute("data-games-id", gamesId);
        standings.setAttribute("data-host-id", hostId);
        window.document.dispatchEvent(
          new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true,
          })
        );
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="sports-results-container">
      <div
        className="results-info"
        id={sport?.gamesId}
        data-host={sport?.dataHost}
        data-key={accesKey}
        data-date=""
        data-league=""
        data-season=""
        data-theme=""
        data-refresh=""
        data-show-toolbar="true"
        data-show-errors="false"
        data-show-logos="false"
        data-modal-game="true"
        data-modal-standings="true"
        data-modal-show-logos="true"
      ></div>
    </section>
  );
};

export default SportsDiscipline;
