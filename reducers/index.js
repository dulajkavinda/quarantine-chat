import { combineReducers } from "redux";

const write = (state = { colorcode: "pink" }, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, colorcode: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  write
});
