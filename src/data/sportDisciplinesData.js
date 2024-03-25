import {
  Icon_Messages,
  Basketball_Icon,
  Hockey_Icon,
  Volleyball_Icon,
  Handlabll_Icon,
  Baseball_Icon,
  Rugby_Icon,
} from "../components/icons";
const setIconFill = (isActive, isHovered, isDarkTheme) => {
  return isDarkTheme
    ? isActive
      ? "#c60031"
      : isHovered
      ? "#fff"
      : "#a7b3b7"
    : isActive
    ? "#f00"
    : isHovered
    ? "#222"
    : "#555e61";
};
export const sportsList = [
  {
    id: 1,
    name: "football",
    pathName: "football",
    gamesId: "wg-api-football-games",
    gameId: "wg-api-football-game",
    standingId: "wg-api-football-standings",
    dataHost: "v3.football.api-sports.io",
    dataLeague: "61",

    icon: (isActive, isHovered, isDarkTheme) => (
      <Icon_Messages fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },
  {
    id: 2,
    name: "basketball",
    pathName: "basketball",
    gamesId: "wg-api-basketball-games",
    standingId: "wg-api-basketball-standings",
    dataHost: "v1.basketball.api-sports.io",
    dataLeague: "61",

    icon: (isActive, isHovered, isDarkTheme) => (
      <Basketball_Icon fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },

  {
    id: 3,
    name: "hockey",
    pathName: "hockey",
    gamesId: "wg-api-hockey-games",
    standingId: "wg-api-hockey-standings",
    dataHost: "v1.hockey.api-sports.io",
    dataLeague: "78",
    icon: (isActive, isHovered, isDarkTheme) => (
      <Hockey_Icon fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },
  {
    id: 4,
    name: "volleyball",
    pathName: "volleyball",
    gamesId: "wg-api-volleyball-games",

    standingId: "wg-api-volleyball-standings",
    dataHost: "v1.volleyball.api-sports.io",
    topLeagues: [
      {
        id: 1,
        name: "polska",
        leagueId: 113,
        img: "https://media.api-sports.io/football/leagues/39.png",
      },
      {
        id: 2,
        name: "seriea",
        leagueId: 88,
        img: "https://media.api-sports.io/football/leagues/140.png",
      },
    ],
    icon: (isActive, isHovered, isDarkTheme) => (
      <Volleyball_Icon fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },
  {
    id: 5,
    name: "handball",
    pathName: "handball",
    gamesId: "wg-api-handball-games",

    standingId: "wg-api-handball-standings",
    dataHost: "v1.handball.api-sports.io",

    icon: (isActive, isHovered, isDarkTheme) => (
      <Handlabll_Icon fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },
  {
    id: 6,
    name: "baseball",
    pathName: "baseball",
    gamesId: "wg-api-baseball-games",

    standingId: "wg-api-baseball-standings",
    dataHost: "v1.baseball.api-sports.io",

    icon: (isActive, isHovered, isDarkTheme) => (
      <Baseball_Icon fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },
  {
    id: 7,
    name: "rugby",
    pathName: "rugby",
    gamesId: "wg-api-rugby-games",
    standingId: "wg-api-rugby-standings",
    dataHost: "v1.rugby.api-sports.io",

    icon: (isActive, isHovered, isDarkTheme) => (
      <Rugby_Icon fill={setIconFill(isActive, isHovered, isDarkTheme)} />
    ),
  },
];
