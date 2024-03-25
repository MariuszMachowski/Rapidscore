const initialState = {
  isDarkTheme: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
