export const changeColor = () => {
  return (dispatch, getState) => {
    const { colorcode } = getState().write;

    if (colorcode == 10) {
      dispatch({ type: "CHANGE_COLOR", payload: "green" });
    } else {
      dispatch({ type: "CHANGE_COLOR", payload: "green" });
    }
  };
};
