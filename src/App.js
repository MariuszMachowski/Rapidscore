import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import SportsDiscipline from "./components/sportsDiscipline/SportsDiscipline";
import TopLeaguesNav from "./components/topLeagues/TopLeaguesNav";
import TopLeagueInfo from "./components/topLeagues/TopLeagueInfo";
import { sportsList } from "./data/sportDisciplinesData";
import { topLeagues } from "./data/topLeaguesData";
import "./App.css";
import Footer from "./components/footer/Footer";
function App() {
  const accesKey = "ce880a7a45427f52e8ebeecd7be459f0";
  const isDarkTheme = useSelector((state) => state.ThemeReducer.isDarkTheme);
  const mainWrapperRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 431);
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkTheme) {
      root.style.setProperty("--secondary-color", "#01111a");
      root.style.setProperty("--navigation-background-color", "#01111a");
      root.style.setProperty("--results-widget-primary-color", "#012638");
      root.style.setProperty("--results-widget-secondary-color", "#012638");
      root.style.setProperty("--results-widget-third-color", "#eee");
      root.style.setProperty("--results-widget-border-color", "#3a514b");
      root.style.setProperty("--results-widget-text-color", "#eee");
      root.style.setProperty("--navigation-border-color", "#012638");
      root.style.setProperty("--btn-first-color", "#a7b3b7");
      root.style.setProperty("--btn-hover-color", "#fff");
      root.style.setProperty("--btn-active-color", "#c60031");
      root.style.setProperty("--top-leagues-color", "#eee");
      root.style.setProperty("--sub-navigation-btn-hover", "#555");
      root.style.setProperty("--sub-navigation-active-color", "#012638");
    } else {
      root.style.setProperty("--secondary-color", "#eae6e6");
      root.style.setProperty("--navigation-background-color", "#f9f6f6");
      root.style.setProperty("--results-widget-primary-color", "#fff");
      root.style.setProperty("--results-widget-secondary-color", "#e9ecef");
      root.style.setProperty("--results-widget-third-color", "#222");
      root.style.setProperty("--results-widget-border-color", "#e9ecef");
      root.style.setProperty("--results-widget-text-color", "#000");
      root.style.setProperty("--navigation-border-color", "#c0c4c4");
      root.style.setProperty("--btn-first-color", "#555e61");
      root.style.setProperty("--btn-hover-color", "#222");
      root.style.setProperty("--btn-active-color", "#ff0046");
      root.style.setProperty("--top-leagues-color", "#111");
      root.style.setProperty("--sub-navigation-btn-hover", "#d1cccc");
      root.style.setProperty("--sub-navigation-active-color", "#f9f6f6");
    }
  }, [isDarkTheme]);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 431);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (isSmallScreen) {
      mainWrapperRef.current.classList.add("mobile-size-wrapper");
    } else {
      mainWrapperRef.current.classList.remove("mobile-size-wrapper");
    }
  }, [isSmallScreen]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation sportsList={sportsList} isDarkTheme={isDarkTheme} />
        <div className={`main-wrapper `} ref={mainWrapperRef}>
          <TopLeaguesNav topLeagues={topLeagues} />
          <Routes>
            <>
              <Route path="/" element={<Navigate to="/football" />} />
              {sportsList.map((sport) => (
                <>
                  <Route
                    key={sport.id}
                    path={`/${sport.pathName}`}
                    element={
                      <SportsDiscipline sport={sport} accesKey={accesKey} />
                    }
                  ></Route>
                </>
              ))}
              {topLeagues.map((league) =>
                league.leagues.map((subLeague) => (
                  <Route
                    key={subLeague.id}
                    path={`${league.path}/${subLeague.pathName}`}
                    element={
                      <TopLeagueInfo
                        league={league}
                        leagueInfo={subLeague}
                        accesKey={accesKey}
                      />
                    }
                  ></Route>
                ))
              )}
            </>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
