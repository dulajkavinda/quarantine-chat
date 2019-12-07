import React from "react";
import SwitchNavigator from "./navigation/SwitchNavigator";

import rootReducer from "./reducers";

// creating the redux store
import { createStore, applyMiddleware } from "redux";

// redux provider
import { Provider } from "react-redux";

import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

const middleware = applyMiddleware(logger, thunkMiddleware);

const store = createStore(rootReducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}
