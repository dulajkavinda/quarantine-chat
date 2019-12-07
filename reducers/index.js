import { combineReducers } from "redux";

const counter = (state = 10, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return { ...state };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "UPDATE_BIO":
      return { ...state, bio: action.payload };
    default:
      return state;
  }
};

const post = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_DESCRIPTION":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  user,
  post
});
