import { combineReducers } from "redux";
import SportsDisciplineReducer from "./sportDisciplineReducer";
import ThemeReducer from "./themeReducer";

const rootReducer = combineReducers({
  SportsDisciplineReducer,
  ThemeReducer,
});

export default rootReducer;
