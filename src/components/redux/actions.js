export const updateDisciplineName = (name) => ({
  type: "UPDATE_DISCIPLINE_NAME",
  payload: name,
});

export const changeTheme = (isDarkTheme) => ({
  type: "CHANGE_THEME",
  payload: isDarkTheme,
});
