const initialState = {
  disciplineName: "football",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DISCIPLINE_NAME":
      return {
        ...state,
        disciplineName: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
